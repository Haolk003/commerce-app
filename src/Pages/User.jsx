import React from 'react'
import { FormControlLabel,Table,TableContainer,TableHead,TablePagination, TableRow } from '@mui/material'
import { Link } from 'react-router-dom'
import { Delete, DeleteOutline, Remove } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import {userRows} from '../dummyData';
import {Navbar,SlideBar} from '../Components'
import { useState } from 'react';
const User = () => {
  const [data,setData]=useState(userRows);
  const handleDelete=(id)=>{
    setData((data)=> data.filter((item)=> item.id !==id));
  }
  const columns=[
    {field:'id',headerName:"ID",width:70},
    {field:'user', headerName:"User",width:250,renderCell:(params)=>{
      return(
        <div className='flex items-center gap-2'>
            <img src={params.row.avatar} alt='' className='w-[40px] h-[40px] object-cover rounded-full'/>
           <span> {params.row.username} </span>
        </div>
      )
    }},
    {field:"email",headerName:"Email",width:220},
    {field:"status",headerName:"Status",width:160},
    {field:"transaction",headerName:"Transaction",width:200},
    {field:"action",headerName:"Action",widht:200,renderCell:(params)=>{
      return(
        <div className="flex items-center gap-4">
          <Link to={"/user/" +params.row.id} >
            <button className='bg-green-600 rounded-md text-white px-3 py-1'>Edit</button>
          </Link>
            <button onClick={()=>handleDelete(params.row.id)}><DeleteOutline className='text-red-500' /></button>
          
        </div>
      )
    }}
  ]
  
  return (
    <div>
      <Navbar />
      <SlideBar />
      <div className='w-[calc(100%-300px)] ml-[300px] mt-[70px] h-[650px]'>
      <DataGrid rows={data} columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection/>
      </div>
    </div>
  )
}

export default User