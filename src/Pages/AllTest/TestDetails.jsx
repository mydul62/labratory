import { FaTimes, FaUser } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "../../Hooks/useAuthProvider";
import { useState } from "react";
import TestModal from "./TestModal/TestModal";

const TestDetails = () => {
 const axiosSecure = useAxiosSecure()
 const {user}=useAuthProvider()
 let [isOpen, setIsEditModalOpen] = useState(false);
 const [modalInfo,setModalInfo]=useState()
 
 function open(id) {
  setIsEditModalOpen(true);
  setModalInfo(id);
}
const closeModal = () => setIsEditModalOpen(false);


 
 
 
 
 
 
 
 
 
 let currentDate = new Date();
 let formattedDate = currentDate.toISOString().split('T')[0];
const {id}=useParams()
const {data:serviceData,refetch}=useQuery({
  queryKey:["tests",id],
  queryFn:async()=>{
  const {data}=await axiosSecure.get(`/Alltests/tests/test/${id}`);
  return data;
  }
  })
  
  const updateSlot = async () => {
    const updateSlot = {
        slot: serviceData?.slot - 1,
    };
    if(updateSlot){
      const { data } = await axiosSecure.patch(`/alltest/slot/${id}`, updateSlot);
      console.log(data);
    
    }
};
  
  const handleBookService = (id)=>{
    open(id)
      // const serviceDetails = {
      // title: serviceData?.title,
      // description: serviceData?.description,
      // price: serviceData?.price,
      // image: serviceData?.image,
      // BookedDate: formattedDate,
      // status:'panding',
      // appontmentData:serviceData?.date,
      // category: serviceData?.category,
      // userName: user?.displayName,
      // userEmail: user?.email,
      // bookingId : id,
      // }
      
      
      
      
      
      // const postService = async()=>{
      //   const {data} = await axiosSecure.post('/alltest/Booking',serviceDetails);
      //   if(data.insertedId){
      //     refetch();
      //      alert("Inserted")
      //      updateSlot()   
      //   }
      // }
      // postService();

  }
 
  return (
   <div >
    <div
    style={{
      backgroundImage: `linear-gradient(to left top,rgba(110, 193, 228, 0.6), rgba(110, 193, 228, 0.7), rgba(110, 193, 228, 0.1)), url('https://cdn.pixabay.com/photo/2017/04/08/11/07/nerve-cells-2213009_1280.jpg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
    }} className="min-h-[400px] flex justify-center items-center bg-fixed">
      <h1  className=" text-5xl text-white uppercase">tis is the item</h1>
    </div>
    <div className=" max-w-7xl w-[90%] mx-auto ">
    <div className=" w-full h-[510px] rounded-md mt-12">
     <img className=" w-full h-[510px] rounded-md" src={serviceData?.image} alt="" />
     </div>
     <div className="grid grid-cols-6 gap-12 py-8 ">
     <div  className=" col-span-4">
  
     <div className= " flex items-center justify-between ">
     <div className=" flex items-center gap-4">
     <button  className=" btn rounded-full py-1 px-8 bg-[#009fe3c8] text-white">{serviceData?.category}</button>
     <span className=" flex items-center gap-1"><FaUser></FaUser>by admin
</span>
<span className=" flex items-center gap-1"><IoTimeOutline size={20}/>
{serviceData?.date}</span>
     </div>
     <div className=" font-bold">
     Availabale Slots:{serviceData?.slot}
     </div>
     </div>
     <div>
     <p>{serviceData?.description}</p>
     </div>
     </div>
     <div className=" col-span-2 bg-[#edededd1] p-4 rounded-md ">
     <div className=" rounded-md space-y-4">
     <h1 className=" text-2xl font-Source">{serviceData?.title}</h1>
     <h2 className="text-xl ">Slots: {serviceData?.slot}</h2>
     <div className=" w-full border border-red-500 p-3">
     Calender
     </div>
     <div>
     <button onClick={()=>handleBookService(serviceData?._id)} className=" btn">Book Now</button>
     </div>
     </div>
     </div>
     </div>
    </div>
    <TestModal isOpen={isOpen} closeModal={closeModal} id={modalInfo} serviceData={serviceData}  ></TestModal>
   </div>
  );
};

export default TestDetails;