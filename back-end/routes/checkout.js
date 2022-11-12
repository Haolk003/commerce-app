
const express=require('express');
const stripe=require('stripe')(process.env.STRIPE_KEY);

const {verifyUser}=require('../utils/verify');
const Order =require('../models/Order');
const router=express.Router();
router.post('/payment',async(req,res,next)=>{
    try{
  const stripeRes=  await stripe.charges.create(
        {
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:"usd",
    });
     res.status(200).json(stripeRes);
}catch(err){
    next(err)
}
});
module.exports=router;