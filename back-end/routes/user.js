const User =require('../models/user');
const express=require('express');
const Crypto =require('crypto-js');
const router=express.Router();
const {verifyAdmin,verifyUser,verifyToken} =require('../utils/verify')
//Update
router.put("/:id",verifyUser,async(req,res,next)=>{
if(req.body.password){
    req.body.password=Crypto.AES.encrypt(req.body.password,process.env.CRYPTOJS_KEY).toString();
}
try{
    const updateUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
    res.status(200).json(updateUser);
}catch(err){
next(err)
}
});
//Delete
router.delete(":/id",verifyUser,async(req,res,next)=>{
    try{
        await User.findOneAndDelete(req.params.id);
        res.status(200).json("Deleted User"); 
    }catch(err){
        next(err);
    }
});
router.get('/find/:id',verifyAdmin,async(req,res,next)=>{
    try{
       const user= await User.findById(req.params.id);
       const {password,...details}=user;
        res.status(200).json(details);
    }catch(err){
        next(err);
    }
})
//Find All 
router.get('/',verifyAdmin,async(req,res,next)=>{
    const qNew=req.query.new;

    try{
        let user;
        if(qNew){
            user=await User.find().sort({createdAt:-1}).limit(5);
        }
        else{
              user=await User.find();
        }
      
        
        res.status(200).json(user)
    }catch(err){
        next(err);
    }
})
// get user stats

router.get('/stats',verifyAdmin,async(req,res,next)=>{
    const date=new Date();
    const lastYear=new Date(date.setFullYear(date.getFullYear()-1));

    try{
        //TODO:
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
              $project: {
                month: { $month: "$createdAt" },
              },
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: 1 },
              },
            },
          ]);
            res.status(200).json(data);
    }catch(err){
        next(err);
    }
})
module.exports=router;