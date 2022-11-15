import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useLocation,Link } from 'react-router-dom';

import { ProductAction } from '../store/productSlice';
const Success = () => {
  const dispatch=useDispatch();
useEffect(()=>{
  dispatch(ProductAction.OrderSuccess());
},[])
  return (
    <div className='flex items-center justify-center h-screen text-center'>
        <div>
       <span className='bg-[#158972] text-2xl px-3 py-2 rounded-lg text-white mb-4 '>Successfull.</span>
       <p className='w-[500px] text-lg mt-4'>Your order is being prepared. Thanks for choosing Lama Shop.</p>
      <Link to='/'> <button className='px-5 mt-5 py-2 text-lg font-semibold bg-green-500 rounded-md text-white'>Go Home</button></Link>
       </div>
    </div>
  )
}

export default Success