import React from 'react'
import {GrSearch} from 'react-icons/gr';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { userAction } from '../store/userSlice';
const Navbar = () => {
  const dispatch=useDispatch();
  const currentUser=useSelector((state)=> state.user.currentUser);
  const quanlity=useSelector((state)=> state.product.quanlity);
  const logout=()=>{
    dispatch(userAction.logout());
  }
  return (
    <div className='bg-white w-full flex items-center justify-between md:px-7 py-5 px-2'>
      <div className='flex items-center gap-3'> 
        <p>EN</p>
        <div className='border-[1px] flex items-center justify-between md:w-[200px] w-[100px] h-[30px] px-2'>
           <input type='text' className='w-[80%] outline-none border-none'/>
           <span><GrSearch /></span>
        </div>
      </div>
      <h2 className='text-center md:text-3xl text-xl font-bold'>LAMA.</h2>
      <div className='flex items-center md:gap-7 gap-1'>
        {currentUser ? <div className='cursor-pointer' onClick={logout}>Logout</div> : <div className='flex items-center gap-4'><Link to='/register' className='cursor-pointer'>REGISTER</Link>
        <Link to='/login'><div className='cursor-pointer'>SIGN IN</div></Link> </div>}
        <Link to='/cart'><div className='relative text-center cursor-pointer'><span className='absolute -top-3 font-semibold -right-2 text-[12px] bg-[#20528f] rounded-full w-[20px] h-[20px] text-center   leading-[20px] text-white'>{quanlity}</span><AiOutlineShoppingCart className='text-2xl' /></div></Link>
      </div>
    </div>
  )
}

export default Navbar