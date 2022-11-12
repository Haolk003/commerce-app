const Order =require('../models/Order');
const express=require('express');
const router=express.Router();
const {verifyAdmin,verifyToken,verifyUser} =require('../utils/verify');
//CREATE
router.post('/',verifyToken,async(req,res,next)=>{
    const newOrder=new Order(req.body);
    try{
        const cart=await newOrder.save();
        res.status(200).json(cart);
    }catch(err){
        next(err);
    }
});
//Update
router.put('/:id',verifyAdmin,async(req,res,next)=>{
    try{
        const UpdateOrder=await Order.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(UpdateOrder);
    }catch(err){
        next(err);
    }
});
//Delete
router.delete('/:id',verifyAdmin,async(req,res,next)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted Cart");
    }catch(err){
        next(err);
    }
});
//Get User Card
router.get('/find/:userId',verifyAdmin,async(req,res,next)=>{
    try{
        const OrderId=Order.findOne({userID:req.params.userId});
        res.status(200).json(OrderId);
    }catch(err){
        next(err);
    }
});
//Get All Cart
router.get('/',verifyAdmin,async(req,res,next)=>{
    const qnew=req.query.new;
    try{
        let getAll;
        if(qnew){
            getAll=await Order.find().sort({createdAt:-1}).limit(5);
        }
        else{
             getAll=await Order.find();
        }
       
        res.status(200).json(getAll);
    }catch(err){
        next(err);
    }
});
//GET MONTH INCOME
router.get('/income',verifyAdmin,async(req,res,next)=>{
    const productId=req.query.pid;
    const date=new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
    try{
        const income = await Order.aggregate([
            {
              $match: {
                createdAt: { $gte: previousMonth },
                ...(productId && {
                  products: { $elemMatch: {id:productId } },
                }),
              },
            },
            {
              $project: {
                month: { $month: "$createdAt" },
                sales: "$amount",
              },
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: "$sales" },
              },
            },
          ]);
            res.status(200).json(income);
    }catch(err){
        next(err);
    }
})
module.exports=router;