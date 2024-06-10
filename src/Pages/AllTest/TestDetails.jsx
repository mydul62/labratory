import { FaTimes, FaUser } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "../../Hooks/useAuthProvider";

const TestDetails = () => {
 const axiosSecure = useAxiosSecure()
 const {user}=useAuthProvider()
 let currentDate = new Date();
    let formattedDate = currentDate.toISOString().split('T')[0];
const {id}=useParams()
const {data:serviceData,refetch}=useQuery({
  queryKey:["tests"],id,
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
  
  const handleBookService = ()=>{
    
      const serviceDetails = {
      title: serviceData?.title,
      description: serviceData?.description,
      price: serviceData?.price,
      image: serviceData?.image,
      BookedDate: formattedDate,
      status:'panding',
      appontmentData:serviceData?.date,
      category: serviceData?.category,
      userName: user?.displayName,
      userEmail: user?.email,
      }
      
      const postService = async()=>{
        const {data} = await axiosSecure.post('/alltest/Booking',serviceDetails);
        if(data.insertedId){
           console.log(data.insertedId);
           alert("Inserted")
           updateSlot()
           refetch(data.insertedId);
           
        }
      }
      postService();
     
      
  }
  
  
  
  return (
   <div >
    <div
    style={{
      backgroundImage: `linear-gradient(to left top,rgba(110, 193, 228, 0.6), rgba(110, 193, 228, 0.7), rgba(110, 193, 228, 0.1)), url('https://cdn.pixabay.com/photo/2017/04/08/11/07/nerve-cells-2213009_1280.jpg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover',
      backgroundPosition: 'center bottom',
    }} className="min-h-[250px] bg-fixed">
      here is test details
    </div>
    <div className=" max-w-7xl w-[90%] mx-auto ">
     <div className="grid grid-cols-6 gap-12 py-16">
     <div  className=" col-span-4">
     <div className=" w-full h-[510px] rounded-md">
     <img className=" w-full h-[510px] rounded-md" src={serviceData?.image} alt="" />
     </div>
     <div className= " flex items-center justify-between py-4">
     <div className=" flex items-center gap-4">
     <button  className=" btn rounded-full py-1 px-8 bg-[#009fe3c8] text-white">{serviceData?.category}</button>
     <span className=" flex items-center gap-1"><FaUser></FaUser>by admin
</span>
<span className=" flex items-center gap-1"><IoTimeOutline size={20}/>
{serviceData?.date}</span>
     </div>
     <div className=" font-bold">
     Slots:{serviceData?.slot}
     </div>
     </div>
     <div>
     <p>{serviceData?.description}</p>
     </div>
     </div>
     <div className=" col-span-2 bg-[#d3e0e7d1] p-4 rounded-md ">
     <div className=" rounded-md space-y-4">
     <h1 className=" text-2xl font-Source">{serviceData?.title}</h1>
     <h2 className="text-xl text-[#009fe3]">Slots: {serviceData?.slot}</h2>
     <div className=" h-[400px] w-full border border-red-500 p-3">
     Calender
     </div>
     <div>
     <button onClick={handleBookService} className=" btn">Book Now</button>
     </div>
     </div>
     </div>
     </div>
    </div>
   </div>
  );
};

export default TestDetails;