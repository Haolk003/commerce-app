const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const productRoute=require('./routes/product');
const AuthRoute=require('./routes/auth');
const CartRoute=require('./routes/cart');
const OrderRoute=require('./routes/order');
const CheckoutRoute=require('./routes/checkout')
const cookieParser=require('cookie-parser');
const UserRoute=require('./routes/user');
const app =express();
const cors=require('cors');

async function main (){
    try{
        await mongoose.connect(process.env.MONGODB_COMMERCE_KEY);
        console.log('connect to MongoDB');
    }catch(err){
        console.log(err.message);
    }
}
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/product',productRoute);
app.use('/api/auth',AuthRoute);
app.use('/api/user',UserRoute);
app.use('/api/order',OrderRoute);
app.use('/api/cart',CartRoute); 
app.use('/api/checkout',CheckoutRoute);
app.use((err,req,res,next)=>{
    const errStatus=err.status || 500;
    const errMessage=err.message || "something went wrong";
    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errMessage,
        stack:err.stack,
    })
})
app.listen(5000,()=>{
    main();
   console.log('hello')
})