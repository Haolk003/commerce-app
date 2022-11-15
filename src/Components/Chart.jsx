import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis,ResponsiveContainer,Tooltip } from 'recharts';
const Chart = ({title,datas,width,dataKey}) => {
  return (
    <div className='shadow-md shadow-gray-500  p-5 h-full'>
        <h2 className='font-semibold text-xl mb-4'>{title}</h2>
        <ResponsiveContainer aspect={4 / 1} width={width}>
        <LineChart   data={datas} >
            <Line type="monotone" dataKey={dataKey}  stroke="#8884d8"/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            </LineChart>
             </ResponsiveContainer>
    </div>
  )
}

export default Chart