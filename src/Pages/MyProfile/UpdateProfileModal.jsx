import PropTypes from 'prop-types';
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { Fragment } from 'react';
import { BiDonateBlood } from 'react-icons/bi';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosCommon from '../../Hooks/useAxiosCommon';
import useAuthProvider from '../../Hooks/useAuthProvider';
import { FaHome } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const UpdateProfileModal = ({ setIsEditModalOpen, isOpen,refetch,closeModal }) => {
const axiosCommon = useAxiosCommon()
const axiosSecure = useAxiosSecure()
const {user}= useAuthProvider()
const email = user.email;

const { data: userInformations } = useQuery({
  queryKey: ["userInformations",email],
  queryFn: async () => {
    const { data } = await axiosCommon.get(`/allusers/email/${email}`);
    return data;
  },
});

console.log(userInformations);

  const { data: districts } = useQuery({
    queryKey: 'districts',
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:5000/district');
      return data;
    },
  });

  const { data: upazillas } = useQuery({
    queryKey: 'upazillas',
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:5000/upazillas');
      return data;
    },
  });
 

  const handleUserUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const bloodGrupe = form.bloodGrupe.value;
    const district = form.districts.value;
    const upazilla = form.upazilas.value;
    const image = form.image.files[0];
    let imageUrl = '';
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      try {
        const { data } = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_iMGBB_API_KEY}`,
          formData
        );
        imageUrl = data.data.display_url;
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
    const updateInfo = { userName, bloodGrupe, district, upazilla, imageUrl };
        const {data} = await axiosSecure.patch(`/allusers/Updates/update/${email}`,updateInfo);
        if(data.acknowledged){
          refetch()
          closeModal()
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your is updated",
            showConfirmButton: false,
            timer: 1500
          });
          
        }
      };
      
      

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsEditModalOpen(false)}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-[500px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Update User Profile
                  <div className="py-8">
                    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                      <form onSubmit={handleUserUpdate}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                          <div>
                            <label className="text-gray-700 dark:text-gray-200">
                              Username
                            </label>
                            <input
                              id="username"
                              defaultValue={userInformations?.name}
                              type="text"
                              name="userName"
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            />
                          </div>
                          <div>
                            <label className="text-gray-700 dark:text-gray-200">
                              Districts
                            </label>
                            <div className="relative flex items-center mt-1">
                              <span className="absolute">
                                <FaHome  size={25} className="text-gray-300 ml-3" />
                              </span>
                              <select
                                name="districts"
                                className="block w-full py-2 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                              >
                                <option selected disabled value="District">
                                  District
                                </option>
                                {districts?.map((district) => (
                                  <option selected={userInformations?.districs==district?.name} key={district?._id} value={district?.name}>
                                    {district?.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="text-gray-700 dark:text-gray-200">
                              Blood Group
                            </label>
                            <div className="relative flex items-center mt-1">
                              <span className="absolute">
                                <BiDonateBlood size={25} className="text-gray-300 ml-3" />
                              </span>
                              <select
                                name="bloodGrupe"
                                className="block w-full py-2 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                              >
                                <option selected disabled value="Blood">
                                  Blood
                                </option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="text-gray-700 dark:text-gray-200">
                              Upazilla
                            </label>
                            <div className="relative flex items-center mt-1">
                              <span className="absolute">
                                <FaHome  size={25} className="text-gray-300 ml-3" />
                              </span>
                              <select
                                name="upazilas"
                                className="block w-full py-2 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                              >
                                <option  disabled value="upazila">
                                  Upazilas
                                </option>
                                {upazillas?.map((upazilla) => (
                                  <option selected={userInformations?.upazella===upazilla?.name} key={upazilla?._id} value={upazilla?.name}>
                                    {upazilla?.name}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                        {/* ------------------------------------ */}
                        <div className="p-4 bg-white w-full m-auto rounded-lg">
                          <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                            <div className="flex flex-col w-max mx-auto text-center">
                              <label>
                                <input
                                  className="text-sm cursor-pointer w-36 hidden"
                                  type="file"
                                  name="image"
                                  id="image"
                                  accept="image/*"
                                />
                                <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                                  Upload Image
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* ------------------------------- */}
                        <div className="flex justify-end mt-6">
                          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                            Update
                          </button>
                        </div>
                      </form>
                    </section>
                  </div>
                </DialogTitle>
                <div className="mt-2 w-full">{/* Update room form */}</div>
                <hr className="mt-8 " />
                <div className="mt-2">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

UpdateProfileModal.propTypes = {
  setIsEditModalOpen: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default UpdateProfileModal;
