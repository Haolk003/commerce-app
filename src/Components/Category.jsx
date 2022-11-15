import React from 'react'
import {categories} from '../data';

const Category = () => {
  return (
    <div className='grid md:grid-cols-3 grid-cols-1  mt-5'>
        {categories.map((item)=>{
            return(
                <div className={`h-[500px] w-[100%] relative object-cover `} key={item.id}  >
                    <img src={item.img} alt="" className='w-full h-full object-cover opacity-80' />
                    <div className='absolute w-full text-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white'>
                    <h2 className='font-bold text-3xl '>{item.title}</h2>
                    <button className='bg-white text-[#333] px-3 py-2 mt-4 cursor-pointer shadow-md rounded-md shadow-[#333] active:shadow-none'>SHOP NOW</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Category