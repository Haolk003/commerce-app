import React from 'react'
import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../store/apiCall';

const Register = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {isFetching,error,currentUser}=useSelector((state)=> state.user);
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(userName && password && email){
     dispatch(register({userName,email,password}));
      
    }
    setEmail('');
    setPassword('');
    setUserName('');    
  }
  if(currentUser){
    navigate('/');
  }
  return (
    <div className='flex items-center justify-center h-screen login'>
        <div className='bg-white w-[400px] px-3 py-2'>
          <form onSubmit={handleSubmit}>
            <h2 className='mt-4 text-3xl'>SIGN IN</h2>
            <input type='text' placeholder='userName' value={userName} onChange={(e)=>setUserName(e.target.value)} className='w-full my-4 h-[40px] px-3 border-[1px] border-gray-600'/><br />
            <input type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} className='w-full my-4 h-[40px] px-3 border-[1px] border-gray-600'/><br />
            <input type='password' placeholder='passsword' value={password} onChange={(e)=> setPassword(e.target.value)} className='w-full my-4 h-[40px] px-3 border-[1px] border-gray-600'/><br />
            <button className='bg-[#47c08b] px-8 py-2 mb-3 text-white' disabled={isFetching}>REGISTER</button>
            <p className='underline mb-3'>DO NOT YOU REMEMEBER THE PASSWORD?</p>
            <p className='underline'>YOU HAVE AN ACCOUNT</p>
            </form>
        </div>
    </div>
  )
}

export default Register