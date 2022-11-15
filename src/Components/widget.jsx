import React, { useState } from 'react';
import TimeAgo from 'react-timeago';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {userRequest} from '../requestMethod'
import { Visibility } from '@mui/icons-material'

const Widget = () => {
    const dispatch=useDispatch();
    const user=useSelector((state)=> state.auth.user);
    const [order,setOrder]=useState([]);
    const [userNew,setUserNew]=useState([]);
    useEffect(()=>{
       const FetchNewUser=async()=>{
         const res=await userRequest.get('/user?new=true');
         setUserNew(res.data);
       }
       user && FetchNewUser();
    },[user]);
   useEffect(()=>{
    const FetchOrder=async()=>{
        const res=await userRequest.get('/order?new=true');
        setOrder(res.data);
    }
    FetchOrder();
   },[user])
  return (
    <div className='mt-3 flex items-center justify-between py-5'>
        <div className='w-[35%] shadow-md shadow-gray-500 py-3 px-4 h-[350px]'>
            <h2 className='text-2xl font-semibold mb-4'>New Join Members</h2>
            {/* member */}
            {userNew && userNew.map((item)=>{
                return(
                     <div className='flex items-center justify-between mb-3' key={item._id}>
                <img src={item.img} alt='' className='w-[40px] h-[40px] object-cover rounded-full'/>
                <div>
                    <h2 className='font-semibold'>{item.userName}</h2>  
                    <p className='text-sm text-gray-500 font-semibold'>Software Enginner</p>
                </div>
                <button className='bg-gray-200 px-2 py-1 rounded-md'><Visibility /> Display</button>
            </div>
                )
            })}
           
           
        </div>
        <div className='w-[60%] h-[350px] shadow-md p-4 shadow-gray-500'>
            <h2 className='text-2xl font-semibold mb-4'>Latest transactions</h2>
            <table className='w-[90%] mx-auto text-left gap-2'>
                <tr className='mb-4'>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amout</th>
                    <th>Status</th>
                </tr>
                {order.map((item)=>{
                    return(
                          <tr key={item._id}>
                    <td className='flex items-center gap-1 mt-3'>
                        <img src={item.img} alt='' className='w-[40px] h-[40px] rounded-full object-cover'/>
                        <p className="font-semibold text-lg">{item.name}</p>
                    </td>
                    <td className='text-gray-500'><TimeAgo date={item.createdAt}  /></td>
                    <td className='text-gray-500'>${item.amount}</td>
                    <td ><span className={`${item.status==="pending" && "bg-blue-300 text-blue-500"} ${item.status==="decline" && "bg-red-300 text-red-500"} ${item.status==="approved" && "bg-green-300 text-green-500"} px-2 py-[1px] rounded-3xl `}>{item.status}</span></td>
                </tr>
                    )
                })}
            </table>
        </div>
    </div>
  )
}

export default Widget