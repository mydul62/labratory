import { FaTimes, FaUser } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const TestDetails = () => {
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
     <img className=" w-full h-[510px] rounded-md" src="http://holamed.like-themes.com/wp-content/uploads/2018/11/blog_11.jpg" alt="" />
     </div>
     <div className= " flex items-center justify-between py-4">
     <div className=" flex items-center gap-4">
     <button className=" btn rounded-full py-1 px-8 bg-[#009fe3c8] text-white">MRI tEst for hert</button>
     <span className=" flex items-center gap-1"><FaUser></FaUser>by admin
</span>
<span className=" flex items-center gap-1"><IoTimeOutline size={20}/>
Navember 7,2024</span>
     </div>
     <div className=" font-bold">
     Slots:10
     </div>
     </div>
     <div>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque odit quam libero iure dicta quidem harum, quo atque eaque explicabo natus vero. Velit, laudantium officia explicabo, doloribus nesciunt vel facilis expedita rem, iste consequuntur doloremque blanditiis quos praesentium? Animi praesentium mollitia at maiores deserunt, sequi vitae nihil culpa veniam nobis obcaecati, quisquam eos quibusdam quo magni illum dicta tenetur! Perferendis, minima modi ipsa alias explicabo inventore voluptatem nostrum deserunt, tempore veritatis praesentium harum? Doloribus autem numquam deleniti eum laboriosam minus odio ipsam delectus inventore, perspiciatis asperiores? Adipisci impedit nemo officia facere earum eligendi, tenetur, eius magnam ipsum modi quo voluptatem.</p>
     </div>
     </div>
     <div className=" col-span-2 bg-[#d3e0e7d1] p-4 rounded-md ">
     <div className=" rounded-md space-y-4">
     <h1 className=" text-2xl font-Source">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, distinctio.</h1>
     <h2 className="text-xl text-[#009fe3]">Slots: 10</h2>
     <h2 className=" text-xl text-[#009fe3]">Slots Free:5</h2>
     </div>
     </div>
     </div>
    </div>
   </div>
  );
};

export default TestDetails;