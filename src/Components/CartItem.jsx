import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {BiMinus} from 'react-icons/bi';
import {IoAdd} from 'react-icons/io5';
import { ProductAction } from '../store/productSlice';
const CartItem = ({name,size,color,id,quanlity,price,img}) => {
  const dispatch=useDispatch();
  const [countQuanlity,setCountQuanlity]=useState(quanlity);
  const increaseQuanlity=()=>{
    setCountQuanlity(countQuanlity+1);
    dispatch(ProductAction.increment(id))
  }
  const descrementQuanliy=()=>{
    setCountQuanlity((quanlity)=> quanlity>1 ? quanlity-1 : quanlity );
    dispatch(ProductAction.descrement({id,color,size}));
  }
  return (
    <div className='flex items-center w-[100%] border-b-[2px] border-[#3333336f] justify-between px-5'>
        <img src={img} alt='' className='md:w-[300px] w-[100px] h-auto' />
        <div className=''>
            <h2 className='md:text-xl'><span className='md:text-2xl font-bold'>Product:</span>{name}</h2>
            <p className='my-5 md:text-xl'><span className='md:text-2xl font-bold'>ID:</span> {id}</p>
            <div className='w-[20px] h-[20px] shadow-sm shadow-black rounded-full' style={{backgroundColor:`${color}`}}></div>
            <p className='mt-5 md:text-xl'><span className='font-bold md:text-2xl'>Size:</span> {size}</p>
        </div>
        <div className='flex flex-col items-center gap-3 font-semibold'>
            <div className='flex items-center gap-4 text-2xl'>
                <span onClick={descrementQuanliy}><BiMinus /></span>
                <span>{countQuanlity}</span>
                <span onClick={increaseQuanlity}><IoAdd /></span>
            </div>
            <div className='text-4xl'>$ {price}</div>
        </div>
    </div>
  )
}

export default CartItem