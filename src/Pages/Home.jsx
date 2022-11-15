import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material'
import React, { useEffect, useState,useMemo } from 'react'
import { Navbar,SlideBar,Chart,Widget } from '../Components';
import { userData } from '../dummyData';
import {userRequest} from '../requestMethod';
const Home = () => {
    const [useStar,setUserStar]=useState([]);
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
     
    useEffect(()=>{
        const FetchUserStar=async()=>{
            try{
                const res=await userRequest.get('/user/stats');
              res.data.map((item)=> setUserStar((star)=>[...star,{name:MONTHS[item._id-1],"Active User":item.total}]))
            }catch(err){
                console.log(err);
            }
        }
        FetchUserStar()
    },[])
  return (
    <div className='relative'>
        <Navbar />
        <SlideBar />
        <div className='w-[calc(100vw-300px)] px-10 mt-[70px] ml-[300px] '>
            <div className='flex items-center justify-between'>
                <div  className='w-[30%] shadow-md shadow-gray-400 py-4 px-5 h-[180px]'>
                    <h2 className='text-xl font-semibold mb-4'>Revanue</h2>
                    <div className='flex items-center mb-4'>
                        <span className='text-3xl font-semibold mr-3'>$2,415</span>
                        <span className='mr-1'>-11.4 </span>
                        <ArrowDownwardOutlined className='text-red-600'/>
                    </div>
                    <p className='text-gray-600 font-semibold'>Compared to last month</p>
                </div>

                <div className='w-[30%] shadow-md shadow-gray-400 py-4 px-5 h-[180px]'>
                    <h2 className='text-xl font-semibold mb-4'>Sales</h2>
                    <div className='flex items-center mb-4'>
                        <span className='text-3xl font-semibold mr-3'>$4,415</span>
                        <span className='mr-1'>-1.4 </span>
                        <ArrowDownwardOutlined className='text-red-600'/>
                    </div>
                    <p className='text-gray-600 font-semibold'>Compared to last month</p>
                </div>

                <div className='w-[30%] shadow-md shadow-gray-400 py-4 px-5 h-[180px]'>
                    <h2 className='text-xl font-semibold mb-4'>Cost</h2>
                    <div className='flex items-center mb-4'>
                        <span className='text-3xl font-semibold mr-3'>$2,225</span>
                        <span className='mr-1'>+2.4</span>
                        <ArrowUpwardOutlined className='text-green-500' />
                    </div>
                    <p className='text-gray-600 font-semibold'>Compared to last month</p>
                </div>
            </div>
            <Chart datas={useStar} title="User Analytics" width="100%" dataKey="Active User"/>
            <Widget />
        </div>
        
    </div>
  )
}

export default Home