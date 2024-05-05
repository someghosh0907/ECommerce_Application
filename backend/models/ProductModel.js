const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId
    },
    title: {
        type: 'String',
        required: [true, "Title is required"]
    },
    description: {
        type: 'String',
        required: [true, " Description is required"]
    },
    price: {
        type: 'Number',
        required: [true, "Price is required"]
    },
    discount:{
        type: 'Number',
        required: [true, "Discount is required"]
    },
    rating: {
        type: 'Number',
        required: [true, "rating is required"]
    },
    stock: {
        type: 'Number',
        required: [true, "stock is required"]
    },
    brand: {
        type: 'String',
        required: [true, "Brand is required"]
    },
    category: {
        type: 'String',
        required: [true, "Category is required"]
    },
    image: [{
        type: 'String',
        required: [true, "Password is required"]
    }]
},{ timestamps: true }
)

const productModel=mongoose.model("Product",productSchema);
module.exports=productModel;