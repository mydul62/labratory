import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../../Hooks/useAxiosCommon";

const Banner = () => {
  const axiosCommon= useAxiosCommon()

  const isActive = true;

  // const banner = {
  //   title: "Comprehensive Diagnostic Services",
  //   image: "https://doctoraltheme.com/wp-content/themes/doctoral/assets/images/gallery/1.jpg",
  //   text: "Get accurate and timely diagnostic services with our state-of-the-art facilities.",
  //   couponCode: "DIAG10",
  //   discountRate: 10,
  // };

  const { data: banner = {}, refetch } = useQuery({
    queryKey: ['banners', isActive],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/all_banners/banners/${isActive}`);
      return data;
    }
  });

  return (
    <div className="relative py-8 min-h-screen flex justify-center items-center flex-col text-center md:mx-auto overflow-hidden">
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.3);
            }
          }

          .banner-bg::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: linear-gradient(to left top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url('${banner?.image}');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            z-index: -1;
            animation: zoomInOut 20s ease-in-out infinite;
          }
        `}
      </style>
      <div className="banner-bg"></div>
      <div>
        <h1 className="lg:text-6xl text-4xl font-bold font-Lora text-white mb-4">{banner.title}</h1>
        <p className="text-lg text-[#f3f1f1] mb-6">{banner.text}</p>
        {banner.couponCode && (
          <div className="mb-6">
            <p className="text-lg font-semibold text-white">
              Coupon Code: <span className="font-bold text-blue-600">{banner.couponCode}</span>
            </p>
            <p className="text-lg font-semibold text-white">
              Discount: <span className="font-bold text-blue-600">{banner.discountRate}%</span>
            </p>
          </div>
        )}
      </div>
      <Link to={'/alltest'}>
        <button className="bg-[#00d2d3] hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          View All Tests
        </button>
      </Link>
    </div>
  );
};

export default Banner;
