import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuthProvider from '../../../../Hooks/useAuthProvider';
import "./navbar.css"
import TopNav from './TopNav';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../../../Hooks/useAxiosCommon';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {user}=useAuthProvider()
  const axiosSecure= useAxiosSecure()
  const email = user?.email;
  console.log(email);
  const { data: userInformations ,refetch} = useQuery({
    queryKey: ["userInformations",email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allusers/email/${email}`);
      return data;
    },
  });
  
  console.log(userInformations);
  return (
   <div className=''>
  <div className='lg:block hidden'>
  <TopNav></TopNav>
  
  </div>
 
    <nav className="relative dark:bg-gray-800 ">
      <div className="max-w-7xl px-6 py-3 mx-auto border-b-2 border-dashed border-[#c1bfbf]">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link to={'/'} href="#">
              <h2 className=' text-3xl font-bold italic lg:text-[#fff] text-[#000]]'>Labra<span className=' text-[#00d2d3]'>tory</span></h2>
            </Link>
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`${
              isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'
            } fixed inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative min-h-screen lg:min-h-full lg:bg-transparent  lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
          >
          
          <div className="flex items-center lg:hidden justify-between mt-4 lg:mt-0">
              <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                {
                user?<div className=' flex  items-center gap-4'>
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                <div>
                <NavLink > <img src={userInformations?.image} alt="avatar" /></NavLink>
                </div>
                 
                </div>
                <button  onClick={()=>logout()}  className=' btn btn-sm bg-[#00d2d3]'> Logout</button>
                </div>:
                <NavLink to={'/login'} > <button className=" btn btn-sm bg-[#00d2d3]">login</button></NavLink>
              
                }
              </button>
              <div onClick={() => setIsOpen(!isOpen)}  className=' justify-center items-center lg:hidden flex'>
             <button className=' btn btn-circle shadow-xl bg-[#00d2d3] text-white'> <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg></button>
            </div>
            </div>
            <div className="flex menu flex-col gap-8 lg:gap-0 -mx-6 lg:flex-row lg:items-center lg:mx-8">
            
            
              <NavLink onClick={() => setIsOpen(!isOpen)}  activeClassName="nav-activ" to={'/'}  className="px-3 py-2 mx-3 mt-2 text-2xl  lg:text-[16px]  font-bold duration-300 transform rounded-md lg:mt-0   lg:text-[#fff] text-[#000]]">
                Home
              </NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} activeClassName="nav-activ" to={'/alltest'}  className="px-3 py-2 mx-3 mt-2  text-2xl lg:text-[16px]  font-bold duration-300 transform rounded-md lg:mt-0   lg:text-[#fff] text-[#000]]">
                All Test
              </NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} activeClassName="nav-activ" to={'/blog'}  className="px-3 py-2 mx-3 mt-2  text-2xl lg:text-[16px]  font-bold duration-300 transform rounded-md lg:mt-0   lg:text-[#fff] text-[#000]]">
               Our Blog
              </NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} activeClassName="nav-activ" to={'/contactus'}  className="px-3 py-2 mx-3 mt-2  text-2xl lg:text-[16px]  font-bold duration-300 transform rounded-md lg:mt-0   lg:text-[#fff] text-[#000]]">
               Contact us
              </NavLink>
              <NavLink onClick={() => setIsOpen(!isOpen)} activeClassName="nav-activ" to={'/aboutus'}  className="px-3 py-2 mx-3 mt-2  text-2xl lg:text-[16px]  font-bold duration-300 transform rounded-md lg:mt-0   lg:text-[#fff] text-[#000]]">
               About Us
              </NavLink>
              <div onClick={() => setIsOpen(!isOpen)} className=' flex justify-center py-6 items-center'>
              <Link to={'/dashboard'}>
              <button className='hover:bg-white lg:hidden lg:btn-lg btn-sm hover:text-black btn flex justify-center items-center text-white bg-[#00d2d3] border-none outline-none'>DashBoard <MdOutlineArrowRightAlt className='' size={20} />
              </button>
              </Link>
              </div>
            </div>
            
          </div>
          <div className=' lg:flex hidden'>
          {
             userInformations?.status == 'blocked'?<Link> <button className='hover:bg-white hover:text-black btn flex justify-center items-center text-white bg-[#00d2d3] border-none outline-none'>Blocked
           </button></Link> :<Link to={'dashboard'}> <button className='hover:bg-white hover:text-black btn flex justify-center items-center text-white bg-[#00d2d3] border-none outline-none'>DashBoard <MdOutlineArrowRightAlt className='' size={20} />
           </button></Link>
          }
            </div>
        </div>
      </div>
    </nav>
   </div>
  );
};

export default Navbar;
