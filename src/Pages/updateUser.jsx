import { CalendarToday, FileUpload, LocationSearching, MailOutline, Person, PhoneAndroid } from '@mui/icons-material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {SlideBar,Navbar} from '../Components';
import {storage} from '../firebase';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import { Link } from 'react-router-dom';
const UpdateUser = () => {
    const [imageUpload,setImageUpload]=useState('');
    const handleSelectImage=(e)=>{
       
        const mountainsRef=ref(storage,`    user/image-${e.target.files[0].lastModified
        }`);
        uploadBytes(mountainsRef,e.target.files[0]).then(()=>{
         getDownloadURL(mountainsRef).then((snapshot)=>{
           setImageUpload(snapshot);
         })
        })
    }
    useEffect(()=>{
        console.log(imageUpload);
    },[imageUpload])
  return (
    <div>
        <Navbar />
        <SlideBar />
        <div className='w-[calc(100%-300px)] ml-[300px] mt-[70px] px-10'>
        <div className='flex items-center justify-between mb-4'>
        <h2 className='text-3xl font-bold'>Edit User</h2>
        <Link to='/newUser'><button className='px-3 py-1 bg-[#51afa1] rounded-md text-white font-semibold'>Create</button></Link>
        </div>
        <div className='flex justify-between items-center'>
            <div className='w-[30%] h-[500px] shadow-md shadow-gray-500 rounded-md p-4'>
                <div className='flex items-center gap-3 mb-5'>
                    <img src='https://static2.yan.vn/YanNews/2167221/202102/facebook-cap-nhat-avatar-doi-voi-tai-khoan-khong-su-dung-anh-dai-dien-e4abd14d.jpg' alt='' className='w-10 h-10 object-cover rounded-full'/>
                    <div>
                        <h2 className='text-lg font-semibold'>Anna Becker</h2>
                        <p className='text-sm text-gray-500'>Software Engineer</p>
                    </div>
                </div>
                <h3 className='font-semibold text-lg text-gray-500 mb-4'>Account Details</h3>
                <div className='flex items-center gap-2'>
                    <Person />
                    <span>annabeck99</span>
                </div>
                <div className='flex items-center gap-2 my-4'>
                    <CalendarToday />
                    <span>10.12.1999</span>
                </div>
                <h3 className='text-lg font-semibold text-gray-500 mb-4'>Contact Details</h3>
                <div className='flex items-center gap-2'>
                    <PhoneAndroid />
                    <span>+1 123 456 67</span>
                </div>
                <div className='flex items-center gap-2 my-4'>
                    <MailOutline />
                    <span>annabeck99@gmail.com</span>
                </div>
                <div className='flex items-center gap-2 '>
                    <LocationSearching />
                    <span>New York | USA</span>
                </div>
            </div>
       

        <div className='w-[68%] h-[500px] shadow-md shadow-gray-500 rounded-md p-4 '>
            <h2 className='font-semibold text-2xl mb-4'>Edit</h2>
            <div className='flex justify-between'>
            <div className='w-[50%]'>
            <div >
                <p className='my-1'>Username</p>
                <input type='text' className='border-b-[2px] border-gray-500 py-1 outline-none w-[100%]' placeholder='anabeck99' />
            </div>
            <div>
                <p className='my-1'>Full name</p>
                <input type='text' className='border-b-[2px] border-gray-500 py-1 outline-none w-[100%]' placeholder='Anna Becker' />
            </div>
            <div>
                <p className='my-1'>Email</p>
                <input type='text' className='border-b-[2px] border-gray-500 py-1 outline-none w-[100%]' placeholder='annabeck99@gmail.com' />
            </div>
            <div>
                <p className='my-1'>Phone</p>
                <input type='text' className='border-b-[2px] border-gray-500 py-1 outline-none w-[100%]' placeholder='+1 234 567 89' />
            </div>
            <div>
                <p className='my-1'>Address</p>
                <input type='text' className='border-b-[2px] border-gray-500 py-1 outline-none w-[100%]' placeholder='New York | USA' />
            </div>

        </div>
        <div className='flex flex-col justify-between w-[45%]'>
            
            <button className='px-4 py-1 bg-blue-800 text-white rounded-md'>Update</button>
        </div>
        </div>
    </div>
    </div>
    </div> 
    </div>
  )
}

export default UpdateUser