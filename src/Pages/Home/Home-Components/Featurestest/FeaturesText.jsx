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
      const {data}=await axiosCommpn.get(`/alltest/Booking/features`);
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
              <SwiperSlide key={data?.bookingId}>
              <div >
              <Link to={`/testdetail/${data?.bookingId}`}>
              <div  className=" border shadow-md border-[#eaeaea] rounded-lg">
                  <div className=" relative">
                  <img className="object-cover w-full h-[300px] rounded-t-lg " src={data?.image} alt=""/>
                  <button  className="absolute text-white  top-3 left-4 py-1 px-4  bg-[#00d2d3] rounded-full">{data?.category}</button>
                  </div>
                  <div className="flex flex-col justify-between space-y-4 py-6 md:py-6 text-center md:p-0 p-3 lg:mx-6">
                      <a href="#" className="text-2xl font-semibold text-gray-800 hover:underline dark:text-white ">
                          {data?.title}
                      </a>
                      <h2 className=" text-xl font-Lora text-gray-600">Service charge: {data?.price}tk</h2>
                      <div className=" flex items-center justify-center">
                      <span className="text-sm text-gray-500 dark:text-gray-300">On:{data?.appontmentData}</span>
                    
                      
                      </div>
                  </div>
              </div>
              </Link>
              </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="absolute -bottom-20 right-0 z-10 flex gap-4 mb-4 md:mb-0 md:-top-20">
          <button className="btn bg-[#00d2d3]" onClick={slideToPrev}>
            <GrPrevious color="#fff" size={20} />
          </button>
          <button className="btn bg-[#00d2d3]" onClick={slideToNext}>
            <GrNext color="#fff" size={20} />
          </button>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default FeaturesTest;
