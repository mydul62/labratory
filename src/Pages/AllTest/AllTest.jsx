import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import AllTestCard from "./AllTestCard";
// import useAxiosCommon from "../../Hooks/useAxiosCommon";
const AllTest = () => {
 const axiosSeCure=useAxiosSecure()
//  const axiosCommon= useAxiosCommon()
 const [startDate, setStartDate] = useState(new Date());
 const [searchDate, setSearchDate] = useState()
 const formatteddate = startDate.toISOString().split('T')[0];
  const {data:Datas}=useQuery({
    queryKey:"datas",
    queryFn:async()=>{
    const {data}=await axiosSeCure.get(`/alltests`);
    return data;
    },
    })  
    
    const handleSerch=()=>{
    setSearchDate(formatteddate);
    }
    console.log(searchDate);

    
  return (
    <div className="">
     <div  style={{
      backgroundImage: `linear-gradient(to left top,rgba(110, 193, 228, 0.6), rgba(110, 193, 228, 0.7), rgba(110, 193, 228, 0.1)), url('https://mida.peerduck.com/wp-content/uploads/2023/03/k43jtng.png')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
    }} className=" flex items-center min-h-[350px] ">
    <div className="w-full mx-auto justify-start">
    
    <div className=" max-w-7xl mx-auto  space-y-6  ">
 <h2 className="md:text-8xl text-7xl   text-[#004552] font-Lora ">Our services
.</h2>
  <h2 className=" text-2xl text-[#595959]">Get the answers you need for a healthier you at our medical diagnostic center.</h2>
 </div>

    </div>
    </div>
    <div className=" max-w-7xl mx-auto ">
    <div className="max-w-7xl  px-6 py-10 mx-auto">
       <div className=" justify-center flex">
       <h1 className="text-2xl font-semibold rounded-b-lg  text-gray-800 text-center border-b-4 inline-block capitalize lg:text-3xl dark:text-white border-blue-400 ">Our All Services</h1>
       </div>
          <div className=" flex gap-8 items-center pt-12">
          <DatePicker className=" block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" selected={startDate} onChange={(date) => setStartDate(date)} />
     
          <button onClick={handleSerch}  className=" py-3 px-8 rounded-lg  bg-[#6EC1E4]  border">Search</button>
   
          </div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3">
           {
           Datas?.map(data=>(
          <AllTestCard key={data?._id} data={data} ></AllTestCard>
           ))
           }
        </div>
    </div>
</div>
    </div>
  );
};

export default AllTest;