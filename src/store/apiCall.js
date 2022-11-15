import { userAction } from "./userSlice";
import { ProductAction } from "./productSlice";
import {publicMethod,userRequest} from '../requestMethod';

export const login=(user)=>{
    return async(dispatch)=>{
        dispatch(userAction.loginStart());
        try{
            const res=await userRequest.post('/auth/login',user);
            dispatch(userAction.loginSuccess(res.data))
        }catch(err){
           dispatch(userAction.loginFailure())
        }
    }
}
export const register=(user)=>{
    return async(dispatch)=>{
        dispatch(userAction.loginStart())
        try{
            const res=await publicMethod.post('/auth/register',user);
            dispatch(userAction.loginSuccess(res.data));
        
        }catch(err){
                dispatch(userAction.loginFailure());
        }
    }
}

export const sendCartUser=(user)=>{
    return async(dispatch)=>{
        try{
            localStorage.setItem('userCommerce',JSON.stringify(user));
        }catch(err){
            console.log(err);
        }
    }
}
export const  FetchUser=()=>{
    return async(dispatch)=>{
        try{
            const user=JSON.parse(localStorage.getItem('userCommerce')); 
            dispatch(userAction.loginSuccess(user))
        }catch(err){
            console.log(err);
        }
    }
}
export const updateCart=(id,cart)=>{
    return async(dispatch)=>{
        try{    
            await userRequest.put(`/cart/${id}`,cart);
        }catch(err){
            console.log(err);
        }
    }
}
export const fetchCart=(id)=>{
    return async(dispatch)=>{
        try{
            const res=await userRequest.get(`/cart/find/${id}`);
            dispatch(ProductAction.FetchData({quanlity:res.data.totalQuanlity,total:res.data.total,products:res.data.products}))
        }catch(err){
            console.log(err);
        }
    }
}
export const orderCart=(order)=>{
    return async(dispatch)=>{
        try{
            const res=await userRequest.post('/order',order);
            console.log(res.data);
        }catch(err){
            console.log(err)
        }
    }
}