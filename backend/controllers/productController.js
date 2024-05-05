const productModel=require('../models/ProductModel')
//const cartModel=require('../models/CartModel')

//GET ALL THE PRODUCTS
exports.getAllProducts=async(req,res)=>{
    try{
        const products=await productModel.find()
        return res.status(200).send({
            userCount: products.size,
            success:true,
            meassage:"All Products Displayed",
            products
        })
    }catch(err){
        console.log(err)
        return res.status(500).send({
            success:false,
            message:"Products not Displayed",
            err
        })
    }
};

//CREATE NEW PRODUCTS
exports.postProducts=async(req,res)=>{
    const newProduct=new productModel(req.body);
    try{
        const savedProduct=await newProduct.save();
        res.status(200).json(savedProduct)
    }catch(error){
        res.status(500).json(error)
    }
}

exports.getProductsQuery=async(req,res)=>{
    const qNew=req.query.new;
    const QCategory=req.query.category;
    try{
        let products;

        if(qNew){
            products=await productModel.find().sort({createdAt: -1}).limit(1);
        }else if(QCategory){
            products=await productModel.find({
                category:{
                    $in:[QCategory],
                },
            });
        }else{
            products=productModel.find()
        }
        res.status(200).json(products);
    }catch(error){
        res.status(500).json(error);
    }
}

//FINDS THE PRODUCT WHICH WE SELECTED TO DIPLAY BY ID
exports.getSelectedProduct=async(req,res)=>{
    try{
        const {id}=req.params;
        const productById=await productModel.findById(id)
        if (!productById) {
            return res.status(404).send({
                success: false,
                message: "blog not found with this ID ${id}"
            })
        }
        return res.status(200).send({
            success:true,
            message:"Selected Product Displayed",
            productById
        })
    }
    catch(error){
        res.status(400).json(error);
        return res.status(500).send({
            success:false,
            message:"error while finding",
            error
        })
    }
}

