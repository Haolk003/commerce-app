import React from 'react'
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {Link} from 'react-router-dom';
const Product = ({image,id}) => {
  return (
    <div className='bg-[#c2e7ec] w-[100%] md:h-[400px] h-[200px]  relative group '>
        <div className='bg-white md:w-[250px] md:h-[250px] w-[100px] h-[100px] rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'></div>
        <img src={image} alt={image} className="relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[50%]"/>
        <div className='absolute hidden w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] group-hover:flex items-center justify-center group-hover:bg-[rgb(0,0,0,0.4)] duration-200 ease-in-out '>
            <div className='flex items-center gap-5 text-center'>
            <div className='w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center cursor-pointer  text-2xl hover:scale-125 duration-300 ease-in-out'><AiOutlineShoppingCart className=''/></div>
            <Link to={`/singleProduct/${id}`}><div className='w-[40px] h-[40px] bg-white rounded-full  cursor-pointer text-2xl  flex items-center justify-center  hover:scale-125 duration-300 ease-in-out'><BiSearch /></div></Link>
            <div className='w-[40px] h-[40px] bg-white rounded-full  cursor-pointer text-2xl  flex items-center justify-center  hover:scale-125 duration-300 ease-in-out'><AiOutlineHeart/></div>
            </div>
        </div>
    </div>
  )
}

export default Product