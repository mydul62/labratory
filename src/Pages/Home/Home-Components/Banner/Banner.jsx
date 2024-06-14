import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Banner = () => {
  const axiosSecure = useAxiosSecure();

 const isActive = true;

//  const banner = {
//   title: "Comprehensive Diagnostic Services",
//   image: "https://doctoraltheme.com/wp-content/themes/doctoral/assets/images/gallery/1.jpg",
//   text: "Get accurate and timely diagnostic services with our state-of-the-art facilities.",
//   couponCode: "DIAG10",
//   discountRate: 10,
// };
  
  const { data: banner ={}, refetch } = useQuery({
    queryKey: ['banners', isActive],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/all_banners/banners/${isActive}`);
      return data;
    }
  });
  return (
    <div    style={{
      backgroundImage: `linear-gradient(to left top, rgba(110, 193, 228, 0.2), rgba(110, 193, 228, 0.4), rgba(110, 193, 228, 0.1)), url('${banner?.image}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className=" p-8  min-h-[700px] flex justify-center items-center flex-col text-center mx-4 md:mx-auto ">
      <h1 className="text-5xl font-bold font-Lora text-gray-800 mb-4">{banner.title}</h1>
      <p className="text-lg text-gray-700 mb-6">{banner.text}</p>
      {banner.couponCode && (
        <div className="mb-6">
          <p className="text-lg font-semibold text-gray-800">Coupon Code: <span className="font-bold text-blue-600">{banner.couponCode}</span></p>
          <p className="text-lg font-semibold text-gray-800">Discount: <span className="font-bold text-blue-600">{banner.discountRate}%</span></p>
        </div>
      )}
      <Link to={'/alltest'}><button
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
      >
        View All Tests
      </button></Link>
    </div>
  );
};

export default Banner;
