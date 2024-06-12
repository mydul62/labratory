import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
    style={{
      backgroundImage: `linear-gradient(to left top,rgba(110, 193, 228, 0.6), rgba(110, 193, 228, 0.7), rgba(110, 193, 228, 0.1)), url('https://mida.peerduck.com/wp-content/uploads/2023/03/k43jtng.png')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  className="flex md:flex-row flex-col md:pt-16 relative"
>
 <div className=" max-w-7xl w-[90%] mx-auto  flex md:flex-row flex-col  items-center justify-between">
 <div className=" flex items-center min-h-[700px]  ">
 <div className="space-y-6 md:w-[70%] ">
 <h2 className="md:text-8xl text-7xl   text-[#004552] font-Lora ">Your health is our top priority.</h2>
  <h2 className=" text-2xl text-[#595959]">Get the answers you need for a healthier you at our medical diagnostic center.</h2>
  <div>
  <Link to={'/allTest'}> <button className=" py-3 px-16 rounded-full bg-[#004552] text-white">All Tests</button></Link>
  </div>
 </div>
  </div>
  <div className=" w-full h-full ">
  <img className=" h-full" src="//mida.peerduck.com/wp-content/uploads/2023/03/k4lmtg-1024x1000.png" alt="" />
  </div>
 </div>
 {/* <div className=" h-28 w-28 text-white   animate-spi rounded-full bg-[#004552] absolute top-28 right-[450px] flex justify-center items-center">
 mahim
 </div> */}
</div>
  );
};

export default Banner;