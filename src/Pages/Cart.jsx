import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate,Link} from 'react-router-dom'
import {Navbar,Announerment,Footer,NewLetter, CartItem} from '../Components';
import {orderCart} from '../store/apiCall';
 const Key=process.env.REACT_APP_STRIPE;
const Cart = () => {
    const dispatch=useDispatch()
    const user=useSelector((state)=> state.user.currentUser);
    const product=useSelector((state)=> state.product.data);
    const total=useSelector((state)=> state.product.total);
   const navigate=useNavigate()
   
    const [stripetoken,setStripetoken]=useState(null);
    const onToken=(token)=>{
      setStripetoken(token);
    }
    useEffect(()=>{
        const makeRequest=async()=>{
            try{
           const res=await axios.post("http://localhost:5000/api/checkout/payment",{
                    tokenId:stripetoken.id,
                    amount:total*100,
                });
                dispatch(orderCart({products:product,userId:user._id,amount:total,address:res.data.billing_details.address,name:res.data.billing_details.name,img:user.img}));
              navigate('/success')
            }catch (err){
                console.log(err)
            }
        }
        stripetoken && makeRequest()    
    },[stripetoken]);
 
  return (
    <div>
        <Navbar />
        <Announerment />
        <h2 className='text-center md:text-4xl mt-2 font-bold '>YOUR BAG</h2>
        {user ? <div >
            <div className='flex items-center md:justify-between my-7 md:px-10'>
            <Link to='/products'><button className='border-[2px] shadow-sm shadow-black border-black md:px-5 md:py-[7px] px-2  py-1 cursor-pointer'>CONTINUE SHOPPING</button></Link>
            <div className='md:flex gap-5 md:text-2xl'>
                <div className='md:mb-0 mb-3'>Shoppping Bag(2)</div>
                <div>Your Wishlist(0)</div>
            </div>
            <button className='bg-black text-white md:px-5 md:py-[7px] px-1 py-1 cursor-pointer'>CHECKOUT NOW</button>
            </div>
            <div className='md:flex px-6'>
                <div className='md:w-[70%] w-full overflow-auto h-[500px]'>
                    {product ? product.map((item)=>{
                        return(
                              <CartItem key={item.id} {...item} />
                        )
                    }):<div>no products</div>}
                  
                    
                </div>
                <div className='md:w-[30%] w-full border-[1px] h-[450px]  border-[#dadada] rounded-md px-5 py-8  '>
                    <h2 className='text-4xl mb-7'>ORDER SUMMARY</h2>
                    <div className='flex items-center justify-between mb-7'>
                        <p className='text-xl'>Subtotal</p>
                        <p className='text-2xl font-semibold'>${total}</p>
                    </div>
                    <div className='flex items-center justify-between mb-7'>
                        <p className='text-xl'>Estimated Shipping</p>
                        <p className='text-2xl font-semibold'>$5.90</p>
                    </div>
                    <div className='flex items-center justify-between mb-7'>
                        <p className='text-xl'>Shipping Discount</p>
                        <p className='text-2xl font-semibold'>$-5.90</p>
                    </div>
                    <div className='flex items-center justify-between mb-7'>
                        <p className='text-3xl'>Total</p>
                        <p className='text-2xl font-semibold'>${total}</p>
                    </div>  
                    {stripetoken ? (<span>Processing, Please wait...</span>):
        <StripeCheckout  billingAddress shippingAddress description={`You total is $${total}`} amount={total*100} token={onToken} stripeKey={Key}> 
         <button className='w-full py-2 bg-black text-white mt-5'>CHECKOUT NOW</button>
       
        </StripeCheckout>}
                   
                </div>
            </div>
        </div> : <div className='text-center flex items-center justify-center mt-10'><button className='bg-black rounded-md w-[100px] h-[50px] text-white text-xl font-semibold'>Login</button></div>}
    </div>
  )
}

export default Cart