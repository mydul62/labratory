import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./features.css";
import { Link } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { sliderSettings } from "./Utils/common";
import { useQuery } from "@tanstack/react-query";
import FeaturesTitle from "./FeaturesTitle";
import useAxiosCommon from "../../../../Hooks/useAxiosCommon";

const FeaturesTest = () => {
  const [swiper, setSwiper] = useState(null);
  const axiosCommpn = useAxiosCommon()
    const {data:Datas}=useQuery({
      queryKey:["appoinments"],
      queryFn:async()=>{
      const {data}=await axiosCommpn.get(`/alltest/Booking`);
      return data;
      }
      })
  const slideToPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const slideToNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <div className=" max-w-7xl mx-auto w-[90%]">
    <div className=" py-16">
    <FeaturesTitle ></FeaturesTitle>
    </div>
    <div data-aos="fade-up "
    data-aos-duration="2500" className="relative  ">
      <div className="swiper-container">
        <Swiper {...sliderSettings} onSwiper={setSwiper}>
            {
            Datas?.map(data => (
              <SwiperSlide key={data?._id}>
              <div >
              <div  className=" border shadow-md border-[#eaeaea] rounded-lg">
                  <div className=" relative">
                  <img className="object-cover w-full h-56 rounded-t-lg " src={data?.image} alt=""/>
                  <button  className="absolute text-white  top-3 left-4 py-1 px-4  bg-[#1d6e7ee2] rounded-full">{data?.category}</button>
                  </div>
                  <div className="flex flex-col justify-between space-y-4 py-6 md:py-6 md:p-0 p-3 lg:mx-6">
                      <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                          {data?.title?.slice(0,30)}...
                      </a>
                      
                      <div className=" flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-300">On:{data?.appontmentData}</span>
                      <div>
                      <Link to={`/testdetail/${data?._id}`}>
                      <button className=" btn rounded-full py-1 px-8 bg-[#2c8394b3] text-white">Details</button>
                      </Link>
                      </div>
                      
                      </div>
                  </div>
              </div>
              </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="absolute -bottom-20 right-0 z-10 flex gap-4 mb-4 md:mb-0 md:-top-20">
          <button className="btn bg-[#27ae60]" onClick={slideToPrev}>
            <GrPrevious size={20} />
          </button>
          <button className="btn bg-[#27ae60]" onClick={slideToNext}>
            <GrNext size={20} />
          </button>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default FeaturesTest;
