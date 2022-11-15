import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom';
import {login} from '../store/apiCall';
const Login = () => {
    const navigate=useNavigate();
    const user=useSelector((state)=> state.auth.user);
    const dispatch=useDispatch();
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(login({userName,password}));
    }
 useEffect(()=>{
  if(user){
    navigate('/')
  }

 },[user])
  return (
    <div  className="flex items-center justify-center h-screen">
        <form className="w-[300px] flex flex-wrap" onSubmit={(e)=>handleSubmit(e)}>
        <input type='text' placeholder="User Name" value={userName} onChange={(e)=> setUserName(e.target.value)}  className="w-full h-10 mb-4 px-4 border-b-[1px] border-gray-700 "/>
        <input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" className="w-full h-10 px-4 border-b-[1px] border-gray-700 "/>
        <button className="w-full h-[40px] bg-blue-400 rounded-lg mt-5" type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login