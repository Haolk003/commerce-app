import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { Link,useParams,useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Navbar,Footer,Announerment,NewLetter } from '../Components';
import { ProductAction } from '../store/productSlice';
import {AiOutlineMinus} from 'react-icons/ai';
import {IoIosAdd} from 'react-icons/io';
import {MdOutlineDone} from 'react-icons/md';
const SingleProduct = () => {
    const navigate=useNavigate();
    const products=useSelector((state)=> state.product.data);
    const user=useSelector((state)=> state.user.currentUser);
    const dispatch=useDispatch();
    const {id} =useParams();
    const [data,setData]=useState({});
    const [amount,setAmount]=useState(1);
    const [size,setSize]=useState('');
    const [selectColor,setSelectColor]=useState('');
   
    const increment=()=>{
        setAmount(amount+1);
    }
    const descrement=()=>{
        setAmount((amount)=>{
            if(amount<=1){
                return amount;
            }
            else{
                return amount - 1;
            }
        })
    }
    const selectedColor=(color)=>{
        setSelectColor(color);
    }
    const handleSubmit=()=>{
        if(user){   
        dispatch(ProductAction.addData({id:data._id,price:data.price,name:data.title,color:selectColor,size:size,quanlity:amount,img:data.img}));
        navigate('/cart');
     }
    }  
    useEffect(()=>{
        const FetchData =async()=>{
            try{
                const product=await axios.get(`http://localhost:5000/api/product/find/${id}`);
                setData(product.data);
                setSelectColor(product.data.color[0]);
                setSize(product.data.size[0]);
            }catch(err){
                console.log(err)
            }
        }
        FetchData();
    },[id]);
    
  return (
    <div>
        <Navbar />
        <Announerment />
        {data && <div className='md:flex gap-3 items-center'>
            <img src={data.img} alt='' className='md:w-[40%] md:h-[800px] w-full h-auto object-cover' />
            <div >
                <h2 className='text-4xl'>{data.title}</h2>
                <p className='my-5 text-xl md:w-[600px] w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis,dolor in finibus malesuada, lectus ipsum porta nunc. at iaculis arcu nisi sed mauris.
                    Nulla fermetum vestibulum ex, eget tristique tortor pretium ut. Cuarabitus elit justo, consequat id conduimetum ac. volutpat omare.
    
                </p>
                <p className='text-5xl font-semibold'>$ {data.price}</p>
                <div className='flex items-center gap-20'>
                <div className='flex items-center gap-2 my-5'>
                    <p>Color:</p>
                    {data.color && data.color.map((item,index)=>{
                        return(
                            <div key={index} onClick={()=> selectedColor(item)} className='relative w-[20px] h-[20px] rounded-full'>
                             <div className={`w-[20px] h-[20px] rounded-full  `}  style={{backgroundColor:`${item} `,opacity:0.4}} >
                            </div><MdOutlineDone className={`${selectColor!==item && "hidden"} text-red-900 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}/>
                             </div>
                        )
                    })}
                   
                  

                </div>
                <div className='flex items-center gap-3'>
                    <p>Size:</p>
                    <select className='w-14 border-[1px] border-gray-600' onChange={(e)=> setSize(e.target.value)}>
                    {data.size && data.size.map((item,index)=>{
                        return(
                            <option key={index}>{item}</option>
                        )
                    })}
                    </select>
                </div>
                </div>
                <div>
                    <div className='flex items-center gap-20 mt-5'>
                        <div className='flex items-center gap-4'>
                            <AiOutlineMinus  className='text-[18px] cursor-pointer' onClick={descrement}/>
                            <span className='rounded-xl border-green-500 w-[32px] h-[32px] border-[1px] leading-[30px] text-center'>{amount}</span>
                            <IoIosAdd className='text-2xl cursor-pointer' onClick={increment}/>
                        </div>
                       <button className='py-3 px-5 border-[2px] border-green-500 cursor-pointer' onClick={handleSubmit}>ADD TO CARD</button>
                    </div>
                </div>
            </div>
        </div>}
        <NewLetter />
        <Footer />
    </div>
  )
}

export default SingleProduct