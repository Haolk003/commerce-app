import React, { useEffect, useState,useMemo } from 'react'
import {Link,useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { storage } from '../firebase';
import { getDownloadURL,uploadBytes,ref } from 'firebase/storage';
import { FileUpload } from '@mui/icons-material';
import { Navbar, SlideBar,Chart } from '../Components';
import {updateProduct} from '../store/apiCall'
import {userRequest} from '../requestMethod';
const SingleProduct = () => {
    const dispatch=useDispatch()
    const {id}=useParams();
    const product=useSelector((state)=> state.product.product.find((product)=>product._id===id));
    const [dataUpdate,setDataUpdate]=useState({});
    const [imageUpload,setImageUpload]=useState('');
    const [statProduct,setStatProduct]=useState([]);
   const  handleSelectImage =(e)=>{
    
    const mountainsRef=ref(storage,`product/image-${e.target.files[0].lastModified
    }`);
    uploadBytes(mountainsRef,e.target.files[0]).then(()=>{
     getDownloadURL(mountainsRef).then((snapshot)=>{
       setImageUpload(snapshot);
       setDataUpdate((data)=> ({...data,img:snapshot}))
     })
    })
   }
   const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const handleInput=(e)=>{
    setDataUpdate((data)=> ({...data,[e.target.name]:e.target.value}))
  }
   useEffect(()=>{
    const getStats=async()=>{
        try{
            const res=await userRequest.get(`/order/income?pid=${id}`);
            const sortData=res.data.sort((a,b)=>a._id-b._id);
            sortData.map((item)=> setStatProduct((product)=> [...product,{name:MONTHS[item._id -1],sales:item.total}]))
        }
    catch(err){
        console.log(err);;
    }
   }
   getStats();
},[id]);
// useEffect(()=>{
// console.log(dataUpdate)
// },[dataUpdate])
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(updateProduct(id,dataUpdate));
}
  return (
    <div>
        <Navbar />
        <SlideBar />
        <div className='w-[calc(100%-300px)] ml-[300px] mt-[70px] p-5'>
            <div className='flex justify-between '>
            <h2 className='text-2xl font-bold  mb-4'>Product</h2>
            <Link to='/newProduct'><button className='w-20 rounded-md bg-[#128b83] text-white h-10  '>Create</button></Link>
            </div>
            <div className='flex items-center justify-between'>
                <div className='w-[60%] h-[220px]'>
                    <Chart title="Products" datas={statProduct} width="100%" dataKey="sales" />
                </div>
                <div className='w-[38%] h-[220px] shadow-md shadow-gray-500 p-4'>
                    <div className='flex items-center gap-4 mb-2'>
                        <img src={product?.img} alt='' className='w-10 h-10 object-cover rounded-full'/>
                        <h2 className='font-semibold text-lg'>{product?.title}</h2>
                    </div>
                    <div className='flex items-center '>
                        <h2 className='text-xl font-semibold w-40'>id:</h2>
                        <p>{product?._id}</p>
                    </div>
                    <div className='flex items-center  '>
                        <h2 className='text-xl font-semibold w-40'>price</h2>
                        <p>{product?.price}</p>
                    </div>
                   
                    <div className='flex items-center  '>
                        <h2 className='text-xl font-semibold w-40'>in stock:</h2>
                        <p>{String(product?.inStock)}</p>
                    </div>
                </div>
            </div>
            <div className='w-full rounded-md shadow-md shadow-gray-500 mt-16 p-5'>
                <form className='flex items-center justify-between' onSubmit={handleSubmit}>
                <div className='w-[60%]' >
                <h2 className='my-2 text-lg text-gray-500 font-semibold'>Product Name</h2>
            <input type='text' name='title'  onChange={(e)=>handleInput(e)} placeholder='Apple AirPod' className='border-b-[2px] border-gray-500 py-1 outline-none w-[40%]' />
                <h2 className='my-2 text-lg text-gray-500 font-semibold'>Price</h2>
                <input type='number' placeholder='$12' name="price"  onChange={(e)=> handleInput(e)} className='border-b-[2px] border-gray-500 py-1 outline-none w-[40%]' />
                <h2 className='my-2 text-lg text-gray-500 font-semibold'>In Stock</h2>
                <select className='w-[40%] border-[2px] border-gray-500 rounded-sm' name='inStock' onChange={(e)=> handleInput}>
                    <option value={true} selected>Yes</option>
                    <option value={false}>No</option>
                </select>
                
                </div>
                <div className='flex flex-col  w-[40%] gap-4'>
                 <div>
                <label htmlFor='file'  className='w-full bg-white '>
                    <div className='w-full relative border-dashed h-[200px] text-center rounded-md overflow-hidden border-[2px] flex flex-col justify-center items-center'>
                        <FileUpload />
                        <p>Choose a file or drag it here.</p>
                       {imageUpload && <img src={imageUpload} alt='' className='absolute w-full h-[200px] object-cover' />}
                    </div>
                    
                </label>
                <input type='file' id='file' className='hidden' onChange={(e)=> handleSelectImage(e)}/>
            </div>
            <button type='submit' className='px-4 py-1 bg-blue-800 text-white rounded-md'>Update</button>
        </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct