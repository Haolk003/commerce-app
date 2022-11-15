import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Route,Routes } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {Home,ProductList,SingleProduct,Login,Cart,Pay,Success,Register} from './Pages';
import { ProductAction } from './store/productSlice';
import {FetchUser,sendCartUser,updateCart,fetchCart} from './store/apiCall';

const App = () => {
 const [request,setRequest]=useState(false);
 const [requestUser,setRequestUser]=useState(false);
  const dispatch=useDispatch()
 const user=useSelector((state)=> state.user.currentUser);
 const {data,total,quanlity}=useSelector((state)=> state.product);

  useEffect(()=>{
    dispatch(FetchUser());
  },[]);
  useEffect(()=>{
    if(requestUser){
       dispatch(sendCartUser(user));
    }
   setRequestUser(true);

 },[user])
  useEffect(()=>{
    if(user){
        dispatch(fetchCart(user._id)) 
    }
  
  },[user])
  useEffect(()=>{  
    if(user &&request){
      const id=user._id;
      const cart={total:total,totalQuanlity:quanlity,products:data}
       dispatch(updateCart(id,cart)) 
    }  
    setRequest(true);
  },[data]);
 
  return (
    <div className='w-full bg-gray-100 '>
        <Routes >
            <Route path='/' element={<Home />}/>
            <Route path='/products' element={<ProductList />} />
            <Route path='/singleProduct/:id' element={<SingleProduct />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/success' element={<Success />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </div>

  )
}

export default App