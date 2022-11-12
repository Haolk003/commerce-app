const User=require('../models/user');
const Cart=require('../models/cart')
const CryptoJS=require('crypto-js');
const express=require('express');
const jwt=require('jsonwebtoken');
const {createError}=require('../utils/createError')
const router=express.Router();
router.post('/register',async(req,res,next)=>{
    const newUser=new User({userName:req.body.userName,email:req.body.email,
    password:CryptoJS.AES.encrypt(req.body.password,process.env.CRYPTOJS_KEY).toString()}
        );
        
    try{
        const AddUser=await newUser.save();
        await new Cart({userId:AddUser._id}).save();
        const token_access=jwt.sign({
            id:AddUser._id,
            isAdmin:AddUser.isAdmin},
        process.env.JWT_KEY, {expiresIn:"3d"});
        const {password,...details}=AddUser._doc;
        res.status(200).json({...details,token_access});
    }catch(err){
        next(err);
    }
});
router.post('/login',async(req,res,next)=>{
    try{
    const user=await User.findOne({userName:req.body.userName}); 
    if(!user){
       return next(createError(404,"USer not found!"));
    } 
    const hashedPassword=CryptoJS.AES.decrypt(user.password,process.env.CRYPTOJS_KEY);
    const originalPassword=hashedPassword.toString(CryptoJS.enc.Utf8);
    if(originalPassword !==req.body.password){
       return next(createError(404,"Wrong Password"));
    } 
         const token_access=jwt.sign({
        id:user._id,
        isAdmin:user.isAdmin},
    process.env.JWT_KEY, {expiresIn:"3d"});
    const {password,...otherDetails}=user._doc;
    res.status(200).json({...otherDetails,token_access});
    
}catch(err){
    next(err);
}
})
module.exports=router;