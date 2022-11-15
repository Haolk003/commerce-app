import React from 'react'
import { Navbar,SlideBar } from '../Components'
const NewUser = () => {
  return (
    <div>
        <Navbar />
        <SlideBar />
        <div className='w-[calc(100%-300px)] mt-[70px] ml-[300px] px-5'>
            <h2 className='mb-3 font-bold text-2xl'>New User</h2>
            <form className='flex flex-wrap items-center gap-3 w-[75%]'>
               <div className='w-[48%]'>
                    <label className='text-gray-500 text-lg '>Username</label><br />
                    <input type='text' placeholder='john' className='border-[1px] my-3 border-[#333333a1] w-full py-1 rounded-sm px-2' />
               </div>
               <div className='w-[48%]'>
                    <label className='text-gray-500 text-lg '>Full Name</label><br />
                    <input type='text' placeholder='John Smith' className='border-[1px] my-3 border-[#333333a1] w-full py-1 rounded-sm px-2' />
               </div>
               <div className='w-[48%]'>
                    <label className='text-gray-500 text-lg '>Email</label><br />
                    <input type='email' placeholder='john@gmail.com' className='border-[1px] my-3 border-[#333333a1] w-full py-1 rounded-sm px-2' />
               </div>
               <div className='w-[48%]'>
                    <label className='text-gray-500 text-lg '>Password</label><br />
                    <input type='password' placeholder='password' className='border-[1px] my-3 border-[#333333a1] w-full py-1 rounded-sm px-2' />
               </div>
               <div className='w-[48%]'>
                    <label className='text-gray-500 text-lg '>Phone</label><br />
                    <input type='text' placeholder='+1 123 456 78' className='border-[1px] my-3 border-[#333333a1] w-full py-1 rounded-sm px-2' />
               </div>
               <div className='w-[48%]'>
                    <label className='text-gray-500 text-lg '>Address</label><br />
                    <input type='text' placeholder='New York | USA' className='border-[1px] my-3 border-[#333333a1] w-full py-1 rounded-sm px-2' />
               </div>
               <div className='w-[48%]'>
                    <p className='text-gray-500 text-lg mb-4 '>Gender</p>
                   <div className='flex items-center gap-3'>
                        <input type='radio' id='sex1' value='male' name='sex'/>
                        <label for='sex1'>Male </label>
                        <input type='radio' id='sex2' value='female' name='sex' />
                        <label for='sex2'>Female </label>
                        <input type='radio' id='sexe' value='other' name='sex' />
                        <label for='sex3'>Male </label>
                        
                   </div>
               </div>
               <div className='w-[48%]'>
                    <label className='text-gray-500 text-lg '>Active</label><br />
                    <select className='w-full border-[1px] border-gray-500 rounded-md py-1 px-1'>
                        <option selected>Yes</option>
                        <option>No</option>
                    </select>
               </div>
               <button className='mt-5 bg-blue-800 rounded-lg text-white w-[200px] h-[40px] font-semibold'>Create</button>
            </form>
        </div>
    </div>
  )
}

export default NewUser