import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "../../Hooks/useAuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UpdateProfileModal from "./UpdateProfileModal";
import { useState } from "react";

const Profile = () => {
const {user}=useAuthProvider()
const email = user.email;
const axiosSecure = useAxiosSecure()
let [isOpen, setIsEditModalOpen] = useState(false)

function open() {
  setIsEditModalOpen(true)
}

function close() {
  setIsEditModalOpen(false)
}



const {data:userinformations}=useQuery({
  queryKey:"userinformations",
  queryFn:async()=>{
  const {data}=await axiosSecure.get(`/allusers/email/${email}`);
  return data;
  }
  })
  return (
   <div>
    <div className='flex justify-center items-center h-screen'>
      {/* <Helmet>
        <title>Profile</title>
      </Helmet> */}
      <div className='bg-white shadow-lg rounded-2xl md:w-3/5'>
        <img
          alt='profile'
          src='https://wallpapercave.com/wp/wp10784415.jpg'
          className='w-full mb-4 rounded-t-lg h-36'
        />
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <a href='#' className='relative block'>
            <img
              alt='profile'
              src={userinformations?.image
              }
              className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
            />
          </a>

          <p className='p-2 px-4 text-xs text-white bg-pink-500 rounded-full'>
            {userinformations?.role}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            User Id: {userinformations?._id}
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex gap-3 flex-wrap items-center justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {userinformations?.name}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>{userinformations?.emailAdress}</span>
              </p>

              <div className=" flex  flex-col gap-1">
               <div >
               <button onClick={open} className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                  Update Profile
                </button>
                <UpdateProfileModal setIsEditModalOpen={setIsEditModalOpen} isOpen={isOpen} ></UpdateProfileModal>
               </div>
               <div>
               <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                  Change Password
                </button>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Profile;