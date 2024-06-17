import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2'

const UserStatusModal = ({ isOpen, closeModal ,email ,refetch}) => {
const axiosSecure = useAxiosSecure()
const [status,setStatus]=useState()

const handleStatusChange = async () => {
  const newStatus = status;
  console.log(newStatus);
  try {
      const data = await axiosSecure.patch(`/allusers/status/${email}`, { status: newStatus });
      console.log(data);
      refetch()
      Swal.fire("Updated successfully");
      closeModal()
  } catch (error) {
    console.error("Failed to update status", error);
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000001b] bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Update Status Now</h2>
        <div className="mt-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            onChange={(event)=>(setStatus(event.target.value))}
            name="status"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          > 
            <option>status</option>
            <option>active</option>
            <option>blocked</option>
          </select>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Close
          </button> 
          <button onClick={handleStatusChange} className='px-4 py-2 bg-green-400 text-white rounded hover:bg-red-700'>Update</button>
        </div>
      </div>
    </div>
  );
};

UserStatusModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default UserStatusModal;
