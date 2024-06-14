
import PropTypes from 'prop-types';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react';

const TestModal = ({ isOpen, closeModal ,id,serviceData}) => {
const axiosSecure = useAxiosSecure()
const [role,setRole]=useState()
const [state, setState] = useState(false);

useEffect(() => {
  setState(true);
}, []);
console.log(state);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Update Status Now</h2>
        <div className="mt-4">
         <h1>ServiceName : {serviceData?.title}</h1>
         <h1>Service Charge : {serviceData?.price}tk</h1>
         <h1>Service Date : {serviceData?.date}</h1>
        </div>
        <div className=' my-5 px-6'>
        <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Coupon Code" />
  <button className="btn btn-sm bg-blue-400">Apply</button>
</label>
        </div>
        <h2>Discounted Rate :1234tk</h2>
        <div className="mt-6 flex justify-between">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Cencal
          </button> 
          <button 
          onClick={handleRoleChange}
          className='px-4 py-2 bg-green-400 text-white rounded hover:bg-red-700'>Update</button>
        </div>
      </div>
    </div>
  );
};

TestModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default TestModal;

