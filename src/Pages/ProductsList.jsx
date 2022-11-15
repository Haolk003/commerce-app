import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Navbar,Footer,Products,Announerment, NewLetter } from '../Components'
const ProductList = () => {
    const [filter,setFilter]=useState({});
    const [sort,setSort]=useState('');

    const handleFilter=(e)=>{
        const value=e.target.value;
        setFilter((filter)=> ({...filter,[e.target.name]:value}));
    }
    const ChangleSort=(e)=>{
        setSort(e.target.value);
    }
   
  return (
    <><div>
          <Navbar />
          <Announerment />
          <div>
              <h2 className='text-4xl font-bold my-5'>Dresses</h2>
              <div className='flex items-center justify-between px-5'>
                  <div className='flex items-center gap-5'>
                      <h3>Filter Products:</h3>
                      <form>
                          <select name='color' onChange={(e)=> handleFilter(e) } className="border-[1px] border-gray-500 rounded-md w-[80px] h-[35px] mr-4">
                              <option disabled selected>Color</option>
                              <option value="white">white</option>
                              <option value='black'>black</option>
                              <option value='red'>red</option>
                              <option value='blue'>blue</option>
                              <option value='yellow'>yellow</option>
                              <option value='green'>green</option>
                          </select>
                          <select name='size' onChange={(e)=> handleFilter(e)} className="border-[1px] border-gray-500 rounded-md w-[80px] h-[35px] mr-4">
                              <option disabled selected>Size</option>
                              <option value="">XS</option>
                              <option>S</option>
                              <option>M</option>
                              <option>L</option>
                              <option>XL</option>
                          </select>
                      </form>
                      </div>
                  <div className='flex items-center gap-5'>
                      <h3>Sort Products:</h3>
                      <select name='' className="border-[1px] border-gray-500 rounded-md w-[100 px] h-[35px] mr-4 " onChange={(e)=>ChangleSort(e)}>
                          <option disabled selected value=''>Newest</option>
                          <option value='asc'>Price (asc)</option>
                          <option value='dec'>Price (dec)</option>
                      </select>

                  </div> 
          </div>
      </div>
      <Products filter={filter} sort={sort}/>
      <NewLetter />
      <Footer />
    </div>
      </>
  )
}

export default ProductList