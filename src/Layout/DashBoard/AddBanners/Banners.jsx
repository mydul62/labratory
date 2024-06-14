import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import AddBanner from "./AddBanner";
const Banners = () => {

  const axiosSecure = useAxiosSecure();

  const { data: banners = [], refetch } = useQuery({
    queryKey: 'banners',
    queryFn: async () => {
      const { data } = await axiosSecure.get('/all_banners');
      return data;
    }
  });
console.log(banners);
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

  return (
    <div className=" ">
      <div className=" flex justify-center items-center py-4 bg-red-400 rounded-md">
      <h2 className="text-white text-2xl">All Banners </h2>
      </div>
     <div className=" flex justify-between gap-3">
     <div className=" flex flex-col gap-6 w-[70%] mt-10 px-4 overflow-y-auto h-[calc(100vh-150px)]">
    {
    banners?.map(banner=>(
      <div key={banner?._id} className="flex lg:w-full w-[90%] bg-white rounded-lg shadow-lg ">
      <div className="w-2/3  bg-cover">
      <img className=" w-full h-full rounded-md" src={banner?.image} alt="" />
      </div>
      <div className="w-1/3 p-4 md:p-4 flex flex-col justify-between ">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">{banner?.title}</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {banner?.text}
        </p>
        <h2><span className=" text-xl font-bold">CouponCode</span> : {banner?.couponCode}</h2>
        <h2><span className=" text-xl font-bold">discountRate</span> : {banner?.discountRate}%</h2>
        <div className="flex justify-end mt-3 items-center">
          <button onClick={()=>handleBannerActive(banner?._id)} className="px-2 py-1 btn btn-sm rounded-full text-xs font-bold text-white uppercase transition-colors transform bg-gray-800    focus:outline-none focus:bg-gray-700 ">
            {banner?.isActive?'active':'Deactive'}
          </button>
        </div>
      </div>
    </div>     
    ))
    
    }
    
    </div>
      <div className=" ">
     <AddBanner></AddBanner>
      </div>
     
     </div>
    </div>
  );
};

export default Banners;