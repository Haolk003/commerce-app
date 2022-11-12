const Cart =require('../models/cart');
const express=require('express');
const router=express.Router();
const {verifyAdmin,verifyToken,verifyUser} =require('../utils/verify');
//CREATE
router.post('/',verifyToken,async(req,res,next)=>{
    const newCart=new Cart(req.body);
    try{
        const cart=await newCart.save();
        res.status(200).json(cart);
    }catch(err){
        next(err);
    }
});
//Update
router.put('/:id',verifyUser,async(req,res,next)=>{
    try{
        const UpdateCart=await Cart.findOneAndUpdate({userId:req.params.id},{$set:req.body},{new:true});
        res.status(200).json(UpdateCart);
    }catch(err){
        next(err);
    }
});
//Delete
router.delete('/:id',verifyUser,async(req,res,next)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted Cart");
    }catch(err){
        next(err);
    }
});
//Get User Card
router.get('/find/:id',verifyUser,async(req,res,next)=>{
    try{
        const UserId=await Cart.findOne({userId:req.params.id});
        res.status(200).json(UserId);
    }catch(err){
        next(err);
    }
});
//Get All Cart
router.get('/',verifyAdmin,async(req,res,next)=>{
    try{
        const GetAll=Cart.find();
        res.status(200).json(GetAll);
    }catch(err){
        next(err);
    }
});
module.exports=router;