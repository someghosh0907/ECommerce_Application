const express = require('express')

const { emptyCart,getCart,addItemToCart} = require('../controllers/cartController')
const router = express.Router()

router.delete("/empty-cart", emptyCart)  //WILL EMPTY THE CART

router.get("/get-cart", getCart)  //WILL SHOW THE ITEMS IN CART

router.post("/add-item-cart",addItemToCart)  //ADD ITEMS TO CART BY PRODUCT ID 

module.exports = router;