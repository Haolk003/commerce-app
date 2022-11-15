import React, { useEffect, useState } from 'react'
import {sliderItems} from '../data';
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai';
import {Link} from 'react-router-dom';
const Slider= () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const HandleClick=(direction)=>{
        if(direction==="left"){
            setSlideIndex((slide)=> slide>0 ? slide - 1 : 2 );
        }
        else{
            setSlideIndex((slide)=> slide < 2 ? slide + 1 : 0 );
        }
    }
    useEffect(()=>{
        console.log(slideIndex)
    },[slideIndex])
  return (
    <div className=' flex items-center flex-1 relative overflow-hidden'>
        <div className='absolute left-3 top-[50%] -translate-y-[50%] cursor-pointer z-20' onClick={()=> HandleClick("left")}><AiOutlineLeft /></div>
        <div className='absolute right-3 top-[50%] -translate-y-[50%] cursor-pointer z-20'  onClick={()=> HandleClick("right")}><AiOutlineRight /></div>
        {sliderItems.map((item)=>{
            return(
                <div key={item.id} className={`w-screen h-screen  md:flex-row flex-col  md:px-40  flex md:items-center md:justify-between  duration-1000  flex-shrink-0 `} style={{backgroundColor:`#${item.bg}`,translate:`${slideIndex * -100}%`,}}>
                    
                    <img src={item.img} alt={item.img} className="md:w-[400px] md:h-[500px] w-full h-auto"/>
                    <div>
                        <h1 className='md:text-7xl text-3xl font-bold md:w-[300px] w-[100%] md:tracking-widest tracking-normal md:leading-[80px] leading-normal mb-10'>{item.title}</h1>
                        <p className='md:w-[600px] w-full md:tracking-wider  md:text-2xl text-lg md:mb-10 mb-1'>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRVIALS</p>
                        <Link to='/products'><button className='border-2 mt-4 border-black px-3 py-2 text-xl font-semibold cursor-pointer '>SHOP NOW</button></Link>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Slider