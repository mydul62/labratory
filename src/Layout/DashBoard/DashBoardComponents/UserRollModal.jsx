
import PropTypes from 'prop-types';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2'
import { useState } from 'react';

const UserRollModal = ({ isOpen, closeModal ,email ,refetch}) => {
const axiosSecure = useAxiosSecure()
const [role,setRole]=useState()

const handleRoleChange = async () => {
  const newStatus = role;
  console.log(newStatus);
  try {
      const data = await axiosSecure.patch(`/allusers/user_role/role/${email}`, { role: newStatus });
      console.log(data);
      refetch();
      Swal.fire("Updated successfully")
      closeModal();
  } catch (error) {
    console.error("Failed to update status", error);
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000001b] bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Update Role Now</h2>
        <div className="mt-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            onChange={(event)=>(setRole(event.target.value))}
            name="status"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option selected disabled>Role</option>
            <option>admin</option>
            <option>user</option>
          </select>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Close
          </button> 
          <button 
          onClick={handleRoleChange}
          className='px-4 py-2 bg-green-400 text-white rounded hover:bg-red-700'>Update</button>
        </div>
      </div>
    </div>
  );
};

UserRollModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default UserRollModal;

