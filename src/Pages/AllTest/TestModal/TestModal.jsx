import PropTypes from 'prop-types';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

const TestModal = ({ isOpen, closeModal, serviceData }) => {
  const axiosSecure = useAxiosSecure();
  const [getPromo, setGetPromo] = useState('');
  const [discount, setDiscount] = useState(0);

  const handlePromocode = async () => {
    const newPromocode = getPromo;
    if (newPromocode) {
      try {
        const { data } = await axiosSecure.get(`/all_banners/getpromo?couponCode=${newPromocode}`);
        if (data.discountRate) {
          const discountValue = parseInt(serviceData?.price) * (parseInt(data.discountRate) / 100);
          setDiscount(discountValue);
          console.log(parseInt(serviceData?.price),parseInt(data.couponCode));
          Swal.fire('Success',' Promo code applied!');
        } else {
          Swal.fire('Invalid Code', 'The promo code is invalid or expired.', 'error');
        }
      } catch (error) {
        console.error("Error fetching promo data:", error);
        Swal.fire('Error', 'An error occurred while fetching promo data.', 'error');
      }
    }
  };
  
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Pay  Now</h2>
        <div className="mt-4">
          <h1>ServiceName: {serviceData?.title}</h1>
          <h1>Service Charge: {serviceData?.price}tk</h1>
          <h1>Service Date: {serviceData?.date}</h1>
        </div>
        <div className="my-5 px-6">
          <label className="input input-bordered flex items-center gap-2">
            <input
              onChange={(e) => setGetPromo(e.target.value)}
              type="text"
              className="grow"
              placeholder="Coupon Code"
            />
            <button onClick={handlePromocode} className="btn btn-sm bg-blue-400">
              Apply
            </button>
          </label>
        </div>
        <h2>Discounted Rate: {discount ? (serviceData?.price - discount).toFixed(2) : serviceData?.price}tk</h2>
        <div className="mt-6 flex justify-between">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Cancel
          </button>
          <button
            className="px-4 w-full ml-2 py-2 bg-green-400 text-white rounded hover:bg-red-700"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

TestModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  serviceData: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    date: PropTypes.string,
  }).isRequired,
};

export default TestModal;
