import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authAction } from '../store/authSlice';
import {NotificationsNoneOutlined,LanguageOutlined, LaunchOutlined, Settings} from '@mui/icons-material';
const Navbar = () => {
  const dispatch=useDispatch()
const logout=()=>{
  dispatch(authAction.logout());
}
  return (
    <div className='w-full fixed top-0 left-0 px-5 h-[70px] flex items-center justify-between'>
        <div className='text-3xl font-bold text-blue-900'>lamaadmin</div>
        <div className='flex items-center gap-5'>
            <div className='relative'><NotificationsNoneOutlined/> <span className='bg-red-500 text-white w-[18px] h-[18px] rounded-full absolute -top-1 -right-1 text-sm flex items-center justify-center'>2</span></div>
            <div className='relative'><LanguageOutlined /><span className='bg-red-500 text-white w-[18px] h-[18px] rounded-full absolute -top-1 -right-1 text-sm flex items-center justify-center'>2</span></div>
            <div><Settings /></div>
            <div onClick={logout}><img src='https://zhair.com.vn/anh-dai-dien-dep-cho-nam/imager_963.jpg' alt='' className='w-[40px] h-[40px] rounded-full object-cover'/></div>
        </div>
    </div>
  )
}

export default Navbar