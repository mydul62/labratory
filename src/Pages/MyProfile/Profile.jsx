import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "../../Hooks/useAuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UpdateProfileModal from "./UpdateProfileModal";
import { useState } from "react";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, passwordReset } = useAuthProvider();
  const email = user.email;
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsEditModalOpen] = useState(false);

  const openModal = () => {
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
  };

  const handleResetPassword = () => {
    passwordReset(email)
      .then(() => {
        Swal.fire("Check uour email to reset!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { data: userInformations ,refetch} = useQuery({
    queryKey: ["userInformations",email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allusers/email/${email}`);
      return data;
    },
  });
console.log(userInformations);
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-70px)] bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg max-w-[800px] w-full p-6">
        <div className="flex items-center justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2023/04/17/12/10/pattern-7932239_960_720.jpg"
            alt="profile background"
            className="rounded-t-lg w-full mb-4 h-36 object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center -mt-16">
          <div className="relative block">
            <img
              src={userInformations?.image || "https://via.placeholder.com/150"}
              alt="profile"
              className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-white"
            />
          </div>
          <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
            {userInformations?.role}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800">
            User ID: {userInformations?._id}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex gap-3 flex-wrap items-center justify-between text-sm text-gray-600">
             <div className=" flex flex-col ">
             <div className="flex flex-col">
                <p>
                  <span className="font-bold">Name:</span>{" "}
                  {userInformations?.name}
                </p>
              </div>
              <div className="flex flex-col">
                <p>
                  <span className="font-bold">Email:</span>{" "}
                  {userInformations?.emailAdress}
                </p>
              </div>
             </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={openModal}
                  className="bg-[#00d2d3] px-8 py-2 rounded-lg text-white cursor-pointer hover:bg-[#af4053]"
                >
                  Update Profile
                </button>
                <UpdateProfileModal
                  setIsEditModalOpen={setIsEditModalOpen}
                  isOpen={isOpen} refetch={refetch} closeModal={closeModal}
                />
                <button
                  onClick={handleResetPassword}
                  className="bg-[#F43F5E] px-8 py-2 rounded-lg text-white cursor-pointer hover:bg-[#af4053]"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
