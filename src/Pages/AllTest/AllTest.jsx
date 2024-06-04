import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
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
          <div>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
           {
           Datas?.map(data=>(
            <div key={data?._id} className="lg:flex">
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={data?.image} alt=""/>

                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        {data?.title}
                    </a>
                    <p>{data?.description}</p>
                    
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
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