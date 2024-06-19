import { FaTimes, FaUser } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { useLocation, useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "../../Hooks/useAuthProvider";
import { useEffect, useState } from "react";
import TestModal from "./TestModal/TestModal";

const TestDetails = () => {
 const axiosSecure = useAxiosSecure()
 const {user}=useAuthProvider()
 const email = user?.email;
 let [isOpen, setIsEditModalOpen] = useState(false);
 const [modalInfo,setModalInfo]=useState()
 const location = useLocation()
 
 
 const { data:userInformations} = useQuery({
  queryKey: ["userInformations",email],
  queryFn: async () => {
    const { data } = await axiosSecure.get(`/allusers/email/${email}`);
    return data;
  },
});

 
 
 
 
 function open(id) {
  setIsEditModalOpen(true);
  setModalInfo(id);
}
const closeModal = () => setIsEditModalOpen(false);


const {id}=useParams()
const {data:serviceData,refetch}=useQuery({
  queryKey:["tests",id],
  queryFn:async()=>{
  const {data}=await axiosSecure.get(`/Alltests/tests/test/${id}`);
  return data;
  }
  })
  
 
  
  
  
  const handleBookService = (id)=>{
    open(id)
  }

  return (
   <div >
    <div
    style={{
      backgroundImage: `linear-gradient(to left top,rgba(110, 193, 228, 0.3), rgba(110, 193, 228, 0.9), rgba(110, 193, 228, 0.3)), url('https://cdn.pixabay.com/photo/2017/04/08/11/07/nerve-cells-2213009_1280.jpg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
    }} className="min-h-[350px] rounded-b-md flex justify-center items-center bg-fixed">
      <h1  className=" text-5xl text-white uppercase">{serviceData?.title}</h1>
    </div>
    <div className=" max-w-7xl w-[90%] mx-auto ">
    <div className=" w-full h-[510px] rounded-md mt-12">
     <img className=" w-full h-[510px] rounded-md" src={serviceData?.image} alt="" />
     </div>
     
     <div className= " flex-wrap gap-3 flex items-center justify-between py-3 ">
     <div className=" flex flex-wrap  items-center gap-4">
     <button  className=" btn rounded-full btn-sm py-1 px-8 bg-[#009fe3c8] text-white">{serviceData?.category}</button>
     <span className=" flex items-center gap-1"><FaUser></FaUser>by admin
</span>
<span className=" flex items-center gap-1"><IoTimeOutline size={20}/>
{serviceData?.date}</span>
     </div>
     <div className=" font-bold">
     Service Charge:{serviceData?.price}tk
     </div>
     <div className=" font-bold">
     Availabale Slots:{serviceData?.slot}
     </div>
     </div>
     <hr />
     <div className=" flex flex-col-reverse lg:grid grid-cols-6 gap-12 py-8 ">
     <div  className=" col-span-4">
  
     <div>
     <h1 className=" text-2xl font-bold mb-2 font-Source">{serviceData?.title}</h1>
     <p className=" text-xl font-Lora">{serviceData?.description}</p>
     </div>
     </div>
     <div className=" col-span-2  rounded-md ">
     <div className=" rounded-md space-y-4 bg-[#edededd1] p-4">
     <div className=" h-[300px] bg-green-300 w-full border border-red-500 p-3">
     Calender
     </div>
     <div>
     <button disabled={serviceData?.slot<=0 ||  userInformations?.status=='blocked'}  onClick={()=>handleBookService(serviceData?._id)} className=" btn bg-blue-300 text-white">Book Now</button>
     </div>
     </div>
     </div>
     </div>
    </div>
    <TestModal isOpen={isOpen} closeModal={closeModal} id={modalInfo} serviceData={serviceData} refetch={refetch}   ></TestModal>
   </div>
  );
};

export default TestDetails;