import { AttachMoneyOutlined, ChatBubbleOutline, FeedbackOutlined, HomeOutlined, MailOutline, PersonOutlineOutlined, ReportRounded, SignalCellular0BarOutlined, StorefrontOutlined, TimelineOutlined, TrendingDownOutlined, TrendingUpOutlined, WorkOutline } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
const SlideBar = () => {
   
  return (
    <div className='fixed left-0 top-[70px] h-[calc(100vh-70px)] bg-gray-50 w-[300px]'>
        <h2 className='font-semibold text-lg mx-2 text-gray-500 mt-4'>Dashboard</h2>
        <NavLink to='/'>{({ isActive }) => ( <div className={`mx-4 mt-[4px] cursor-pointer w-[80%] rounded-lg ${isActive && "bg-gray-200" } py-[2px] `} ><HomeOutlined /> <span className='ml-1'>Home</span></div>)}</NavLink>
        <div className={`mx-4 mt-[4px] cursor-pointer w-[80%] rounded-lg  py-[2px]`} ><TimelineOutlined /> <span className='ml-1'>Analtytics</span></div>
        <div className={`mx-4 mt-[4px] cursor-pointer w-[80%] rounded-lg  py-[2px] `}><TrendingUpOutlined /> <span className='ml-1'>Sales</span></div>
        
        <h2 className='font-semibold text-lg mx-2 text-gray-500 mt-4'>Quick Menu</h2>
       <NavLink to='/user'>{({ isActive }) => ( <div className={`mx-4 mt-[4px] cursor-pointer w-[80%] rounded-lg ${isActive && "bg-gray-200" } py-[2px] `} ><PersonOutlineOutlined /> <span className='ml-1'>User</span></div>)}</NavLink>

       <NavLink to='/products'>{({ isActive }) => ( <div className={`mx-4 mt-[4px] cursor-pointer w-[80%] rounded-lg ${isActive && "bg-gray-200" } py-[2px] `} ><StorefrontOutlined /> <span className='ml-1'>Products</span></div>)}</NavLink>

        <div className={`mx-4 mt-[4px] cursor-pointer w-[80%] rounded-lg  py-[2px]`} ><AttachMoneyOutlined /> <span className='ml-1'>Transations</span></div>

        <div className={`mx-4 mt-[4px] cursor-pointer w-[80%] rounded-lg  py-[2px] `}><SignalCellular0BarOutlined /> <span className='ml-1'>Reports</span></div>
        
        <h2 className='font-semibold text-lg mx-2 text-gray-500 mt-4'>Notifications</h2>
        <div className={`mx-4 mt-[4px] cursor-pointer w-[80%] rounded-lg  py-[2px] `} ><MailOutline /> <span className='ml-1'>Mail</span></div>
        <div className={`mx-4 mt-[4px] cursor-pointer w-[80%] rounded-lg  py-[2px]`} ><FeedbackOutlined /> <span className='ml-1'>Feedback</span></div>
        <div className={`mx-4 mt-[4px] cursor-pointer w-[80%] rounded-lg  py-[2px] `} ><ChatBubbleOutline /> <span className='ml-1'>Messages</span></div>

        <h2 className='font-semibold text-lg mx-2 text-gray-500 mt-4'>Staff</h2>
        <div className={`mx-4 mt-[4px] cursor-pointer w-[80%] rounded-lg  py-[2px] `} ><WorkOutline /> <span className='ml-1'>Manage</span></div>
        <div className={`mx-4 mt-[4px] cursor-pointer w-[80%] rounded-lg  py-[2px] `} ><TimelineOutlined /> <span className='ml-1'>Analtytics</span></div>
        <div className={`mx-4 mt-[4px] cursor-pointer w-[80%] rounded-lg  py-[2px] `} ><ReportRounded /> <span className='ml-1'>Reports</span></div>
    </div>
  )
}

export default SlideBar