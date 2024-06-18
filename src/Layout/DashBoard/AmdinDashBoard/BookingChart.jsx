import { useQueries, useQuery } from '@tanstack/react-query';
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useAxiosCommon from '../../../Hooks/useAxiosCommon';


const BookingChart = () => {
const axiosCommon = useAxiosCommon()

  const {data}=useQuery({
    queryKey:["Bookings"],
    queryFn:async()=>{
    const {data}=await axiosCommon.get("/aggregated-data");
    return data;
    }
    })



  return (
    <ResponsiveContainer className="min-h-[calc(100vh-400px)] lg:min-h-full" width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="title" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="totalBooking" fill="green" />
    </BarChart>
  </ResponsiveContainer>
  );
};

export default BookingChart;