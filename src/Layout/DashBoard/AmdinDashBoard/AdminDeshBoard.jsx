
import { useQuery } from '@tanstack/react-query';
import BookingChart from './BookingChart';
import ComplitationsChart from './ComplitationsChart';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useEffect, useState } from 'react';
import { MdLocalGasStation } from 'react-icons/md';



  
const AdminDeshBoard = () => {
 const axiosSeCure = useAxiosSecure()
 const [panding,SetPanding]=useState(0)
 const [delivared,SetDelivared]=useState([])
 
 const { data: Datas = [] } = useQuery({
  queryKey: "datas",
  queryFn: async () => {
    const { data } = await axiosSeCure.get(`/alltest/Booking`);
    return data;
  },
});

    useEffect(() => {
      const pandingData = Datas.filter(data => data.status === "panding");
      SetPanding(pandingData.length);
    }, [Datas]);

    useEffect(() => {
      const DelivaredData = Datas.filter(data => data.status === "delivared");
      SetDelivared(DelivaredData.length);
    }, [Datas]);
    
    const perCentOfPanding = ((panding/Datas?.length)*100).toFixed(2);
    const perCentOfDelivared = ((delivared/Datas?.length)*100).toFixed(2);
    
  return (
    <div className="container mx-auto p-4  rounded-md">
      <div className="flex flex-col lg:flex-row  justify-center gap-4 items-center  mb-4">
        <div className=" bg-base-100 hover:scale-105 duration-700 p-4 rounded-l-[10px] shadow-sm border-2 flex flex-col justify-center items-center h-40 w-full">
          <h1 className="text-3xl  font-bold">Total Rerservations</h1>
          <h3 className="text-2xl  font-bold">{Datas?.length}</h3>
        </div>
        <div className="bg-base-100 shadow-sm border-2 flex flex-col hover:scale-105 duration-700 p-4  justify-center items-center h-40 w-full">
          <h1 className="text-3xl  font-bold">Pandings</h1>
          <h3 className="text-2xl  font-bold">{panding}</h3>
        </div>
        <div className="bg-base-100 hover:scale-105 duration-700 p-4 rounded-r-[10px] shadow-sm border-2 flex flex-col justify-center items-center h-40 w-full">
          <h1 className="text-3xl  font-bold">Delivared</h1>
          <h3 className="text-2xl  font-bold">{delivared}</h3>
        </div>
      </div>

      <div className=' flex flex-col lg:flex-row gap-3  rounded-md justify-between h-[calc(100vh-270px)]'>
      <div className=' lg:w-[70%] lg:mb-4 bg-base-100 lg:h-full h-screen shadow-sm hover:scale-105 duration-700 p-4 rounded-[10px] border-2 '>
      
      <BookingChart></BookingChart>
      </div>
      <div className=' h-[calc(100vh-270px)] bg-base-100 hover:scale-105 duration-700 p-4 rounded-[10px] shadow-sm border-2 lg:w-[30%] '>

         <div className=' ml-12 mt-6 space-y-6 -mb-16'>
         <h1 className=' text-2xl font-medium font-Lora'>•Panding : {perCentOfPanding}%</h1>
         <h2 className='text-2xl font-medium font-Lora'>•Complate : {perCentOfDelivared}%</h2>
         </div>
      <ComplitationsChart panding={panding} delivared={delivared}></ComplitationsChart>
      </div>
  
      </div>
    </div>
  );
};

export default AdminDeshBoard;
