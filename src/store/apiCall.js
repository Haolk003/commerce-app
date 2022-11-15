import { authAction } from './authSlice';
import {productAction} from './productSlice'
import {publicMethod,userRequest} from '../requestMethod';
import { async } from '@firebase/util';
export const login=(user)=>{
    return async(dispatch)=>{
        dispatch(authAction.loginStart());
        try{
            const res=await publicMethod.post('/auth/login',user);
            dispatch(authAction.loginSuccess(res.data))
        }catch(err){
           dispatch(authAction.loginError())
        }
    }
}
export const sendCartUser=(user)=>{
    return async(dispatch)=>{
        try{
            localStorage.setItem('userAdminCommerce',JSON.stringify(user));
        }catch(err){
            console.log(err);
        }
    }
}
export const  FetchUser=()=>{
    return async(dispatch)=>{
        try{
            const user=JSON.parse(localStorage.getItem('userAdminCommerce')); 
            dispatch(authAction.loginSuccess(user))
        }catch(err){
            console.log(err);
        }
    }
}
export const  getProduct=()=>{
    return async(dispatch)=>{
        dispatch(productAction.getProductStart())
        try{

            const res=await userRequest.get('/product');
            dispatch(productAction.getProductSuccess(res.data));

        }catch(err){
            dispatch(productAction.getProductError());
            console.log(err);
        }
    }
}

export const createProduct=(product)=>{
    return async(dispatch)=>{
        dispatch(productAction.createProductStart())
        try{

            const res=await userRequest.post('/product',product);
            dispatch(productAction.createProductSuccess(res.data));
            console.log(res.data)
        }catch(err){
            dispatch(productAction.createProductError());
            console.log(err);
        }
    }
}
export const  deleteProduct=(id)=>{
    return async(dispatch)=>{
        dispatch(productAction.deleteProductStart())
        try{

            const res=await userRequest.delete(`/product/${id}`);
            dispatch(productAction.deleteProductSuccess(id));

        }catch(err){
            dispatch(productAction.deleteProductError());
        }
    }
}
export const  updateProduct=(id,product)=>{
    return async(dispatch)=>{
        dispatch(productAction.updateProductStart())
        try{

            const res=await userRequest.put(`/product/update/${id}`,product);
            console.log(res.data);
            dispatch(productAction.updateProductSuccess({id,product:res.data}));

        }catch(err){
            dispatch(productAction.updateProductError());
            console.log(err)
        }
    }
}

