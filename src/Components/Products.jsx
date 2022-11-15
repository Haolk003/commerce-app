import React from 'react'
import {popularProducts} from '../data';
import {Product} from './index';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Products = ({filter,sort}) => {
  const [products,setProducts]=useState([]);
  const [filterProduct,setFilterProduct]=useState([]);
  const FetchData=async()=>{
    try{
    const product=await axios.get("http://localhost:5000/api/product");
      setProducts(product.data);
    }catch(err){
      console.log(err);
    }
  }
 
  useEffect(()=>{
FetchData();
  },[]);
  useEffect(()=>{
    //TODO:Oject.entries
    products && filter   && setFilterProduct(products.filter((item)=>Object.entries(filter).every(([key,value])=>{
      return item[key].includes(value);
    })))
  },[filter,products]);
  useEffect(()=>{
    if(sort==="asc"){
      setFilterProduct((data)=> data.sort((a,b)=>a.price-b.price));
    }
    else if(sort==="dec"){
      setFilterProduct((data)=> data.sort((a,b)=>b.price-a.price));
    }
    else{
      setFilterProduct((data)=> data.sort((a,b)=>a.createdAt-b.createdAt));
    }
  },[filterProduct,sort])
  return (
    <div className='grid md:grid-cols-4 grid-cols-2 gap-3 my-6'>
        {filterProduct ? filterProduct.map((item)=>{
            return(
                <Product key={item._id} image={item.img} id={item._id}/>
            )
        }):<></>}
    </div>
  )
}

export default Products