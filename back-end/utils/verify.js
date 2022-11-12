const jwt=require('jsonwebtoken');
const {createError}=require('./createError');

const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token;
    if(!authHeader){
       return next(createError(401,'You are not authenticated'))
    }
   
        const token = authHeader.split(" ")[1];
         jwt.verify(token,process.env.JWT_KEY,(err,user)=>{
        if(err) return next(createError(401,"Token is not valid!"))
        req.user=user;
        next()
    })
    
   
}
const verifyUser=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next()
        }
        else{
            return next(createError(401,"You are not authorized!"));
        }
    })
}
const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user?.isAdmin){
            next();
        }
        else{
            return next(createError(401,"You are not Admin"));
        }
    })
}
module.exports={verifyToken,verifyUser,verifyAdmin}