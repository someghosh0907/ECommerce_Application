const express = require('express')

const { getAllProducts, getProductsQuery ,postProducts,getSelectedProduct} = require('../controllers/productController')
const router = express.Router()

router.get("/all-products", getAllProducts)  //WILL GET ALL THA  PRODUCTS

router.post("/create-new", postProducts) //CREATE NEW PRODUCTS

router.get("/", getProductsQuery)  //WILL RETURN VALUES BASED ON THE QUERIES PASSED BY

//router.get("/in-cart",getSelectedProduct) //WILL GET THE PRODUCT CARD SELECTED FROM LIST OF PRODUCTS TO DISPLAY IN CART SECTION

router.get("/product-page/:id",getSelectedProduct)  //WILL GET THE PRODUCT GET BY PRODUCT ID 

module.exports = router;
