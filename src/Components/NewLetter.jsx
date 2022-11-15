import React from 'react'
import {AiOutlineSend} from 'react-icons/ai';
const NewLetter = () => {
  return (
    <div className='h-[400px] bg-pink-100 text-center flex flex-col items-center justify-center ' >
        <h2 className='text-6xl font-bold mb-5 tracking-wider'>Newsletter</h2>
        <p className='text-2xl text-gray-800 mb-5'>Get time updates from your favorite products</p>
        <div className='flex items-center'>
            <input type="email" name="email" className='md:w-[400px] w-[250px] h-[40px] px-4 border-none outline-none' placeholder='Your Email'  />
            <button className='h-[40px] bg-green-700 w-[70px] flex items-center justify-center text-2xl text-white'><AiOutlineSend /></button>
        </div>
        </div>
  )
}

export default NewLetter