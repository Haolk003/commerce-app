
const express=require('express');
const router=express.Router();
const Product =require('../models/product');
const {verifyAdmin,} =require('../utils/verify')
router.post("/",verifyAdmin,async(req,res,next)=>{
    const newProduct=new Product(req.body);
    try{
        //TODO:
       const savedProduct=await newProduct.save();
        res.status(200).json(savedProduct);
    }catch(err){
        next(err);
    }
});
router.put("/update/:id",verifyAdmin,async(req,res,next)=>{
    try{
        const UpdateProduct=await Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(UpdateProduct);
    }catch(err){
        next(err);
    }
});
router.get('/find/:id',async(req,res,next)=>{
    try{
        const product=await Product.findById(req.params.id);
        res.status(200).json(product);
    }catch(err){
        next(err);
    }
});
router.get('/',async(req,res,next)=>{
  const qNew=req.query.new;
  const qCategory=req.query.categories;
    try{
        let products;
        if(qNew){
            products=await Product.find().sort({createAt:-1}).limit(1)
        }
        else if(qCategory){
            products=await Product.find({
                categories:{
                    $in:[qCategory]
                }
            })
        }
        else{
            products=await Product.find()
        }
       res.status(200).json(products);
    }catch(err){
        next(err)
    }
});
router.delete('/:id',verifyAdmin,async(req,res,next)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Deleted")
    }catch(err){
        next(err);
    }
})
module.exports=router