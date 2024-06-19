// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./recoment.css"
// import required modules
import { Link } from 'react-router-dom';
import { Autoplay} from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../../../Hooks/useAxiosCommon';
export default function Recoment() {
const axiosCommon = useAxiosCommon()
  const {data: recommendations=[]} = useQuery({
    queryKey: ["recommendations"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/recomendations/recomendation");
      return data;
    }
  });

  
  return (
    <>
    <div className=' max-w-7xl w-[90%] py-12 mx-auto'>
    <h2 className=' text-4xl font-Lora font-medium'>Recomended Tips</h2>
    </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper max-w-7xl w-[90%] mx-auto"
      >
      {
      
      <div className="flex transform transition-transform ease-in-out duration-1000" >
      {recommendations.map((item) => (
        <SwiperSlide key={item.id} className="">
          <div
          className="relative  main-div h-[250px] rounded-lg"
        >
          <img
            className=" w-full h-[350px] rounded-lg"
            src={item?.image}
            alt=""
          />
          <div className=" sort-div  text-white p-4  rounded-lg flex flex-col space-y-3  bottom-0 left-0 right-0 h-28 bg-[#00d3d34d]">
            <h2 className="text-xl font-Rancho font-bold  ">{item?.title}</h2>
            <div className=" space-y-3">
              <p className=" div-pera hidden">
             {item?.description}
              </p>
              <Link >
                <button className=" btn btn-sm rounded-full">Learn more</button>
              </Link>{" "}
            </div>
            <p></p>
          </div>
        </div>
        </SwiperSlide>
      ))}
    </div>
      
      }
      </Swiper>
    </>
  );
}
