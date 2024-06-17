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
    queryKey:["datas",searchDate],
    queryFn:async()=>{
             if(searchDate){
              const {data}=await axiosSeCure.get(`/alltests?search=${searchDate}`);
              return data;
             }
             const {data}=await axiosSeCure.get(`/alltests`);
             return data;
    },
    })  
    
    const handleSerch=()=>{
    setSearchDate(formatteddate);
    }

    
  return (
    <div className="">
     <div style={{
  backgroundImage: `linear-gradient(to left top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://img.freepik.com/free-photo/copy-space-glasses-stethoscope_23-2148519794.jpg?w=1380&t=st=1718458369~exp=1718458969~hmac=9d53d94ec5fdf8a7e6ef02178272f81ea3b054cd0493ed43e52094135a80f5ce)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}} className=" flex items-center min-h-[400px] ">
    <div className="w-full mx-auto justify-start">
    
    <div className=" max-w-7xl mx-auto mt-10  space-y-6  ">
 <h2 className="md:text-6xl text-5xl   text-[#004552] font-Lora ">Our services
.</h2>
  <h2 className=" text-2xl text-[#595959]">Get the answers you need for a healthier you at our medical diagnostic center.</h2>
 </div>

    </div>
    </div>
    <div className=" max-w-7xl mx-auto ">
    <div className="max-w-7xl  px-6 py-10 mx-auto">
       <div className=" justify-center flex">
       <h1 className="text-2xl font-semibold rounded-b-lg  text-gray-800 text-center border-b-4 border-[#00d2d3]  inline-block capitalize lg:text-3xl dark:text-white  ">Our All Services</h1>
       </div>
          <div className=" flex gap-16 items-center pt-12">
          <DatePicker className=" block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" selected={startDate} onChange={(date) => setStartDate(date)} />
     
          <button onClick={handleSerch}  className=" py-3 px-8 rounded-lg  bg-[#00d2d3]  border">Search</button>
   
          </div>
           {
           Datas?<div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3">
           {
           Datas?.map(data=>(
          <AllTestCard key={data?._id} data={data} ></AllTestCard>
           ))
           }
        </div>:<div className=" flex-col flex justify-center items-center h-[calc(100vh-600px)]">
        
        <h3 className=" text-3xl font-bold">Data not found</h3>
        <p>Enter Valid email</p>
        </div>
           
           }
    </div>
    
    
    <div className="flex justify-center py-3 mb-12">
      <a href="#" className="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white rounded-md cursor-not-allowed dark:bg-gray-800 dark:text-gray-600">
        Previous
      </a>

      <a href="#" className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        1
      </a>

      <a href="#" className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        2
      </a>

      <a href="#" className="items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        3
      </a>

      <a href="#" className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
        Next
      </a>
    </div>
    
</div>
    </div>
  );
};

export default AllTest;