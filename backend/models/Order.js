const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    products:[{
        productId:{
            type: String,
        },
        quantity:{
            type: String,
            default:1,
        }
    }],
    amount:{
        type: Number,
        required:true
    },
    address:{
        type: Object,
        required:true
    },
    status:{
        type: String,
        required:true
    }
}, { timestamps: true }
);

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;