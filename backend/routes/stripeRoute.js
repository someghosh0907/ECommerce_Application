const express = require('express')
const router = express.Router()

router.post("/create-checkout-session",async(req,res)=>{
    const {products}=req.body
    const lineItems=products.map((pro)=>{
        price_data={
            currency:"inr",
            product_data:{
                name:pro.name,
                images:[pro.image]
            },
            unit_amount:Math.round(pro.price*100),
        }
        quantity:pro.quantity
    })
const session=await Stripe.checkout.sessions.create({
    payment_method_types:["card"],
    line_items:lineItems,
    mode:"payment",
    success_url:"",  //FRONTEND PAGES FOR SUCCESS 
    cancel_url:"" //FRONTEND PAGES FOR CANCEL
})

res.json({id:session.id})
})
module.exports=router