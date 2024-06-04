import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
const AllTest = () => {
 const axiosSeCure=useAxiosSecure()
 const [startDate, setStartDate] = useState(new Date());
  const {data:Datas}=useQuery({
    queryKey:"districts",
    queryFn:async()=>{
    const {data}=await axiosSeCure.get("/alltests");
    return data;
    }
    })
    console.log(Datas);
    
  return (
    <div className=" ">
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
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">From the blog</h1>
          <div className=" pt-12">
          <DatePicker className=" block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" selected={startDate} onChange={(date) => setStartDate(date)} />
          <button className="  border">Search</button>
          </div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3">
           {
           Datas?.map(data=>(
            <div key={data?._id}>
            <div  className=" border shadow-md border-[#eaeaea] rounded-lg">
                <div className=" relative">
                <img className="object-cover w-full h-56 rounded-t-lg " src={data?.image} alt=""/>
                <button  className="absolute text-white  top-3 left-4 py-1 px-4  bg-[#1d6e7ee2] rounded-full">{data?.category}</button>
                </div>
                <div className="flex flex-col justify-between space-y-4 py-6 md:py-6 md:p-0 p-3 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        {data?.title.slice(0,60)}...
                    </a>
                    
                    <div className=" flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-300">On:{data?.date}</span>
                    <div>
                    <Link to={`/testdetail/${data?._id}`}>
                    <button className=" btn rounded-full py-1 px-8 bg-[#2c8394b3] text-white">Details</button>
                    </Link>
                    </div>
                    
                    </div>
                </div>
            </div>
            </div>
           ))
           }
        </div>
    </div>
</div>
    </div>
  );
};

export default AllTest;