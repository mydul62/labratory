import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import AddBanner from "./AddBanner";
import Swal from "sweetalert2";
const Banners = () => {

  const axiosSecure = useAxiosSecure();

  const { data: banners = [], refetch } = useQuery({
    queryKey: 'banners',
    queryFn: async () => {
      const { data } = await axiosSecure.get('/all_banners');
      return data;
    }
  });
  const handleBannerActive = (id)=>{
  console.log(id);
    axiosSecure.put(`/all_banners/${id}`)
   .then(res=>{
      console.log(res);
      refetch();
    })
   .catch(err=>{
      console.log(err);
    })

  }
  
  const handleDeleteBanner = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosSecure.delete(`/all_banners/delete/${id}`);
          console.log(data);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } catch (error) {
          console.error("Error deleting banner:", error);
          Swal.fire({
            title: "Error!",
            text: "There was an issue deleting your file.",
            icon: "error"
          });
        }
      }
    });
  };
  

  return (
    <div className=" ">
      <div className=" flex flex-col lg:flex-row justify-center items-center py-4 bg-[#00d2d3] rounded-md">
      <h2 className="text-white text-2xl">All Banners </h2>
      </div>
     <div className=" flex flex-col-reverse lg:flex-row justify-between gap-3">
     <div className=" flex flex-col gap-6 w-full lg:w-[70%] mt-10 overflow-y-auto h-screen">
    {
    banners?.map(banner=>(
      <div key={banner?._id} className="flex flex-col lg:flex-row lg:w-full  bg-white rounded-lg shadow-lg ">
      <div className="lg:w-2/3  w-full bg-cover">
      <img className=" w-full h-full rounded-md" src={banner?.image} alt="" />
      </div>
      <div className="lg:w-1/3 w-full p-4 lg:px-4 flex flex-col  justify-between ">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">{banner?.title}</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {banner?.text}
        </p>
        <h2><span className=" text-xl font-bold">CouponCode</span> : {banner?.couponCode}</h2>
        <h2><span className=" text-xl font-bold">discountRate</span> : {banner?.discountRate}%</h2>
        <div className="flex justify-between mt-3 items-center">
          <button 
          onClick={()=>handleDeleteBanner(banner?._id)}
          className="px-2 py-1 btn btn-sm rounded-full text-xs font-bold text-white uppercase transition-colors transform bg-[#d30000]   focus:outline-none ">
          Delete
          </button>
          <button onClick={()=>handleBannerActive(banner?._id)} className="px-2 py-1 btn btn-sm rounded-full text-xs font-bold text-white uppercase transition-colors transform bg-[#00d2d3] ">
            {banner?.isActive?'active':'Deactive'}
          </button>
        </div>
      </div>
    </div>     
    ))
    
    }
    
    </div>
      <div className=" min-h-screen mt-8">
     <AddBanner refetch={refetch}></AddBanner>
      </div>
     
     </div>
    </div>
  );
};

export default Banners;