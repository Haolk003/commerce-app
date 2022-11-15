import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {productRows} from '../dummyData';
import { Navbar,SlideBar } from '../Components';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import {getProduct,deleteProduct} from '../store/apiCall'
const Products = () => {
  const dispatch=useDispatch();
  const product=useSelector((state)=> state.product.product);
    const [data,setData]=useState(productRows);
    
    const columns=[
        {field:'_id',headerName:"ID",width:230},
        {field:'product', headerName:"Product",width:500,renderCell:(params)=>{
          return(
            <div className='flex items-center gap-2'>
                <img src={params.row.img} alt='' className='w-[40px] h-[40px] object-cover rounded-full'/>
               <span> {params.row.title} </span>
            </div>
          )
        }},
        
        {field:"inStock",headerName:"Stock",width:100},
        {field:"price",headerName:"Price",width:150},
        {field:"action",headerName:"Action",widht:200,renderCell:(params)=>{
          return(
            <div className="flex items-center gap-4">
              <Link to={"/products/"+params.row._id} >
                <button className='bg-green-600 rounded-md text-white px-3 py-1'>Edit</button>
              </Link>
                <button onClick={()=> handleDelete(params.row._id)}><DeleteOutline className='text-red-500' /></button>
            </div>
          )
        }}
      ]
     const handleDelete=(id)=>{
        dispatch(deleteProduct(id));
        console.log(id);
     }
     useEffect(()=>{
      dispatch(getProduct());
     },[])
     useEffect(()=>{
      console.log(product);
     },[product])
  return (
    <div>
        <Navbar />
        <SlideBar />
        <div className='w-[calc(100%-300px)] ml-[300px] mt-[70px] h-[800px]'>
       {product && <DataGrid rows={product} getRowId={(row)=> row._id} columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection/>}
        </div>
    </div>
  )
}

export default Products