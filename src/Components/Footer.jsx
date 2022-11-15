import React from 'react'
import {FaFacebook,FaPinterest,FaTwitter,FaInstagram,FaMapMarkerAlt,FaPhoneAlt,FaPaypal,FaCcDiscover,FaCcVisa} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsPaypal} from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='h-[300px] md:flex flex-row  text-center md:text-left   bg-white md:px-4 px-2 py-5 gap-10'>
        <div className='md:w-[25%] w-full'>
            <h2 className='text-5xl font-semibold'>LAMA.</h2>
            <p className='whitespace-norm my-5'>There are many variations of passages of Lorem Ipsum available, but the majority have  suffered  alteration in some form, by injected humour, or randomised words which don't look enven slightly believable.</p>
            <div className='text-2xl flex items-center gap-5 justify-center'>
                <FaFacebook className='text-[#4267b2]'/>
                <FaInstagram className='text-[#E95950]'/>
                <FaTwitter  className='text-[#1DA1F2]'/>
                <FaPinterest className='text-[#E50914]'/>
            </div>
         </div>
         <div className='md:w-[35%] w-full'>
            <h2 className='text-xl font-semibold mb-6'>Userful Links</h2>
            <div className='flex items-center justify-between flex-wrap gap-y-4 '>
                <p className='w-[50%]'>Home</p>
                <p className='w-[50%]'>Cart</p>
                <p className='w-[50%]'>Man Fanshion</p>
                <p className='w-[50%]'>Woman Fashion</p>
                <p className='w-[50%]'>Accessories</p>
                <p className='w-[50%]'>My Account</p>
                <p className='w-[50%]'>Order Tracking</p>
                <p className='w-[50%]'>Wishlist</p>
                <p className='w-[50%]'>Wishlist</p>
                <p className='w-[50%]'>Tems</p>
            </div>
         </div>
         <div className='md:w-[30%] w-full'>
            <h2 className='font-semibold text-xl mb-4'>Contact</h2>
            <div className='flex items-center gap-4 mb-4'>
                <FaMapMarkerAlt className='text-xl'/>
                <p>622 Dixie Path, South Tobinchester 98336</p>
            </div>
            <div  className='flex items-center gap-4 mb-4 '>
                <FaPhoneAlt className='text-xl'/>
                <p>+84582847760</p>
            </div>
            <div  className='flex items-center gap-4'>
                <HiOutlineMail className='text-2xl'/>
                <p>nguyenquochaolop91@gmail.com</p>
            </div>
            <div className='flex items-center gap-3 text-3xl mt-4'>
              <FaPaypal />
              <FaCcDiscover />
              <FaCcVisa />
            </div>
         </div>
    </div>
  )
}

export default Footer