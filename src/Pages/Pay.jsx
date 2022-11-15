import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {useNavigate} from 'react-router-dom'

const Pay = () => {
    const navigate=useNavigate();
    const Key="pk_test_51M0SbXFVVOtfRhpqylcU9PZ7BtU1bloIVqj5wJQUfYnzXHX8xilN2SdNC8M4bshySarnneK4k1V1aVmKefSc4g8E00Z1yfn929"
    const [stripetoken,setStripetoken]=useState(null);
    const onToken=(token)=>{
      setStripetoken(token);
    }
    useEffect(()=>{
        const makeRequest=async()=>{
            try{
               await axios.post("http://localhost:5000/api/checkout/payment",{
                    tokenId:stripetoken.id,
                    amount:2000,
                });
                 
            }catch (err){
                console.log(err)
            }
        }
        stripetoken && makeRequest() &&   navigate('/success'); 
    },[stripetoken,navigate])
  return (
    <div className='flex items-center justify-center h-screen'>
        {stripetoken ? (<span>Processing, Please wait...</span>):
        <StripeCheckout  billingAddress shippingAddress description='You total is $20' amount={2000} token={onToken} stripeKey={Key}> 
        
        <button className='bg-black text-white px-5 py-1 text-xl rounded-md'>Pay</button>
        </StripeCheckout>}
    </div>
  )
}

export default Pay