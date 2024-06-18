import { NavLink } from "react-router-dom";
import useAuthProvider from "../../../../Hooks/useAuthProvider";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsStopwatchFill } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const TopNav = () => {
const {logout,user}=useAuthProvider()
const email =user?.email;
const axiosSecure = useAxiosSecure()

const { data:userInformations} = useQuery({
  queryKey: ["userInformations",email],
  queryFn: async () => {
    const { data } = await axiosSecure.get(`/allusers/email/${email}`);
    return data;
  },
});

  return (
    <div className=" bg-white">
     <div className=" bg-white flex justify-between items-center max-w-7xl w-[90%] mx-auto py-2">
     <div className=" flex justify-center items-center *:text-sm text-[#404040] *:font-bold  gap-5">
     <h2 className="flex justify-center items-center gap-1"><FaPhoneAlt /><span className=" text-[#00d2d3]">Hotline:</span> +3 (092) 508-38-01</h2>
     <h2 className="flex justify-center items-center gap-1"><FaLocationDot /><span className=" text-[#00d2d3]">Address:</span> 23, Medical Str., New York, USA</h2>
     <h2 className="flex justify-center items-center gap-1"><BsStopwatchFill /><span className=" text-[#00d2d3]">Mon-Sat:</span> 8:00AM - 7:00PM</h2>
     </div>
     <div>
     <div className="flex items-center mt-4 lg:mt-0">
              <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                {
                user?<div className=' flex md:flex-row items-center flex-col gap-4'>
                <div className="w-6 h-6 overflow-hidden border-2 border-gray-400 rounded-full">
                <div>
                <NavLink > <img src={userInformations?.image} alt="avatar" /></NavLink>
                </div>
                 
                </div>
                <button  onClick={()=>logout()}  className=' btn btn-sm bg-[#00d2d3]'> Logout</button>
                </div>:
                <NavLink to={'/login'} > <button className=" btn btn-sm bg-[#00d2d3]">login</button></NavLink>
              
                }
              </button>
            </div>
     </div>
     </div>
    </div>
  );
};

export default TopNav;