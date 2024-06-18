import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import useAuthProvider from "../../Hooks/useAuthProvider";
import { RxCross1 } from "react-icons/rx";
import AllUserRoutes from "./AllUserRoutes/AllUserRoutes";
import AllAdminRoutes from "./AllAdminRoutes/AllAdminRoutes";
import useAdmin from "../../AdminHooks/useAdmin";
import { CgProfile } from "react-icons/cg";
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const DashBoard = () => {
const [dashboard,setDashboard]=useState(true)
const {user,logout}=useAuthProvider()
const axiosSecure=useAxiosCommon()
const email = user.email;
 const {admin}= useAdmin()
const handleDashboard =()=>{
  setDashboard(!dashboard);
}

const { data: userInformations=[] ,refetch} = useQuery({
    queryKey: ["userInformations",email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allusers/email/${email}`);
      return data;
    },
  });
  console.log(userInformations);

  return (
  <div>
     <div className=" flex lg:hidden   shadow-sm  justify-between py-4 border-b border ">
  <div><h2 className=" md:ml-16 ml-3 font-Lora text-2xl italic">LabRatory</h2></div>
  {
  dashboard?<FaBars className="lg:hidden mr-6" onClick={ handleDashboard} size={30} ></FaBars>: <RxCross1 size={30} className="lg:hidden mr-6" onClick={ handleDashboard}  />
  }
  </div> 
  <aside className="flex  rounded-md">
  
    <div className={` z-50 flex flex-col lg:translate-x-0 ${dashboard? 'translate-x-[-100%] ':'translate-x-0' }   duration-500 absolute lg:static w-80 xs:w-[70%]   px-4  overflow-y-auto bg-white   dark:bg-gray-900 dark:border-gray-700`}>
    <div className="flex  ">
     <div className="md:flex h-[calc(100vh-66px)] flex-col items-center w-16   bg-white dark:bg-gray-900 dark:border-gray-700 ">
          <nav className="flex flex-col items-center flex-1 space-y-12 mt-4 ">
              <NavLink to={'/'}  href="#" className="p-1.5 inline-block text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
              </NavLink>
  
              <a href="#" className="p-1.5 inline-block text-blue-500 transition-colors duration-200 bg-blue-100 rounded-lg dark:text-blue-400 dark:bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
              </a>
  
              <a href="#" className="p-1.5 inline-block text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
              </a>
          </nav>
  
          <div className="flex flex-col items-center mt-4  space-y-4">
              <a href="#">
                  <img className="object-cover w-8 h-8 rounded-lg" src={userInformations?.image} alt="avatar" />
              </a>
  
              <button onClick={()=>logout()} href="#" className="text-gray-500 transition-colors duration-200 rotate-180 dark:text-gray-400 rtl:rotate-0 hover:text-blue-500 dark:hover:text-blue-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                  </svg>
              </button>
          </div>
      </div>
      
      <div className="h-[calc(100vh-66px)] px-5  bg-white border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700">
  
          <nav className="mt-4 -mx-3 space-y-6 ">
              <div className="space-y-3 ">
  
                  {
                  admin?.admin && <NavLink to={'admindashboard'}
                  end
                  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                      </svg>
  
                      <span onClick={()=>setDashboard(true)} className="mx-2 text-sm font-medium">Dashboard</span>
                  </NavLink>
                  
                  }
  
                  <NavLink to={'/dashboard'} end  className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                     < CgProfile size={20}></CgProfile>
  
                      <span onClick={()=>setDashboard(true)} className="mx-2 text-sm font-medium">My Profile</span>
                  </NavLink>
              </div>
           {
        
           admin?.admin?<div>
           <AllAdminRoutes setDashboard={setDashboard}  ></AllAdminRoutes>
           </div>:<div>
           <AllUserRoutes setDashboard={setDashboard}  ></AllUserRoutes>
           </div>
           }
              
          </nav>
      </div>
     </div>
    </div>
     <div>
     </div>
     <div className={` flex-1 h-screen overflow-y-auto p-3 lg:p-6`} >
  <Outlet></Outlet>
   </div>
  </aside>
  </div>
  );
};

export default DashBoard;