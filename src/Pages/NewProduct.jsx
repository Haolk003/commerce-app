import React from 'react'
import { Navbar, SlideBar } from '../Components'
import { FileUpload } from '@mui/icons-material'
import { useState } from 'react';
import { storage } from '../firebase';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {createProduct} from '../store/apiCall'
const NewProduct = () => {
  const dispatch=useDispatch()
  const [product,setProducts]=useState(null);
  const [imageUpload,setImageUpload]=useState({});

  const handleSelectImage=(e)=>{
       
    const mountainsRef=ref(storage,`Newproduct/image-${e.target.files[0].lastModified
    }`);
    uploadBytes(mountainsRef,e.target.files[0]).then(()=>{
     getDownloadURL(mountainsRef).then((snapshot)=>{
       setImageUpload(snapshot);
       setProducts((product)=> ({...product,img:snapshot}));
     })
    })
}
const handleChange=(e)=>{
  
  setProducts((product)=> ({...product,[e.target.name]:e.target.value}));
}
const handleSubmit=async(e)=>{
  e.preventDefault();
  try{
    if(product){
      dispatch(createProduct(product));
       setProducts(null);
    }
   
  }catch(err){
    console.log(err);
  }
}
const handleInputs=(e)=>{
  const colors=e.target.value.split(',');
  setProducts((product)=>({...product,[e.target.name]:colors}));
}
useEffect(()=>{
  console.log(product);
},[product])
  return (
    <div>
        <Navbar />
        <SlideBar />
        <div className='w-[calc(100%-300px)] ml-[300px] mt-[70px]'>
        <h2 className='text-2xl font-bold mb-4'>New Product</h2>
        <form className='flex flex-col gap-4' onSubmit={(e)=> handleSubmit(e)}>
            <h3 className='text-lg font-semibold text-gray-500 '>Image</h3>
            <div>
                <label htmlFor='file'  className='w-[400px] bg-white '>
                    <div className='w-[400px] relative border-dashed h-[200px] text-center border-[2px] flex flex-col justify-center items-center'>
                        <FileUpload />
                        <p>Choose a file or drag it here.</p>
                       {imageUpload && <img src={imageUpload} alt='' className='absolute w-full h-full object-cover' />}
                    </div>
                    
                </label>
                <input type='file' id='file' className='hidden' onChange={(e)=> handleSelectImage(e)}/>
            </div>
            <h3  className='text-lg font-semibold text-gray-500 ' >Name</h3>
            <input className='w-[300px] rounded-md border-[1px] border-gray-500 py-2 px-1' value={product ? product.title:""} name='title' type='text' placeholder='Apple Airpods' onChange={(e)=> handleChange(e)} />
            <h3  className='text-lg font-semibold text-gray-500 ' >Color</h3>
            <input className='w-[300px] rounded-md border-[1px] border-gray-500 py-2 px-1' value={product ? product.color :""} onChange={(e)=> handleInputs(e)} name='color' type='text' placeholder='green,red,...'  />
            <h3  className='text-lg font-semibold text-gray-500 ' >Size</h3>
            <input className='w-[300px] rounded-md border-[1px] border-gray-500 py-2 px-1' value={product ? product.size :''} onChange={(e)=> handleInputs(e)} name='size' type='text' placeholder='M,L,XL,2XL,...'  />
            <h3  className='text-lg font-semibold text-gray-500 ' >Category</h3>
            <input className='w-[300px] rounded-md border-[1px] border-gray-500 py-2 px-1' value={product ? product.caregories:''} onChange={(e)=> handleInputs(e)} name='categories' type='text' placeholder='man,shirt,...'  />
            <h3  className='text-lg font-semibold text-gray-500 '  >Desc</h3>
            <input className='w-[300px] rounded-md border-[1px] border-gray-500 py-2 px-1' value={product ? product.desc:''} name='desc' type='text' placeholder='Good' onChange={(e)=> handleChange(e)}/>
            <h3  className='text-lg font-semibold text-gray-500 '>Price</h3>
            <input className='w-[300px] rounded-md border-[1px] border-gray-500 py-2 px-1' value={product ? product.number : 0} type='number' name='price' placeholder='123' onChange={(e)=> handleChange(e)} />
            <h3  className='text-lg font-semibold text-gray-500 '>Stock</h3>
            <select className='w-[300px] rounded-md border-[1px] border-gray-500 py-2 px-1'  name='isStock' onChange={(e)=> handleChange(e)}>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select>
            <button className='px-2 py-1 bg-blue-700 text-white rounded-md w-[100px] h-10'>Create</button>
        </form>
    </div>
    </div>
  )
}

export default NewProduct