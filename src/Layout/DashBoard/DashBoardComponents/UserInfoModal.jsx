import PropTypes from 'prop-types';
import {
  Dialog,
  Transition,
} from '@headlessui/react'
import { Fragment } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const UserInfoModal = ({ setIsEditModalOpen, isOpen, email }) => {
  const axiosSecure = useAxiosSecure();
  
  const { data: userinfo } = useQuery({
    queryKey: ['userinfo', email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allusers/email/${email}`);
      return data;
    }
  });

  console.log(userinfo);
  
  return (
    <div className='z-40'>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={() => setIsEditModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-[500px] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title as='h3' className='text-lg font-medium leading-6 text-gray-900'>
                    <div>
                      <div className='flex justify-end bg-red-400 h-24'>
                        <button className='btn btn-sm text-white bg-[#2c9440] rounded-full m-4'>{userinfo?.status}</button>
                      </div>
                      <div className='flex flex-col items-center justify-center -mt-[50px]'>
                        <img src={userinfo?.image} className='rounded-lg h-24 w-24' alt="" />
                        <h2>{userinfo?.role}</h2>
                      </div>
                      <div className='*:pb-3 p-4'>
                        <span>Personal information</span>
                        <hr />
                        <h2 className='text-sm'>Patient Name: {userinfo?.name}</h2>
                        <hr />
                        <h2 className='text-sm'>Patient Email: {userinfo?.emailAdress}</h2>
                        <hr />
                        <h2 className='text-sm'>Blood Group: {userinfo?.bloodGrupe}</h2>
                      </div>
                      <div className='*:pb-3 px-4'>
                        <span>Address</span>
                        <hr />
                        <h2 className='text-sm'>District: {userinfo?.districs}</h2>
                        <hr />
                        <h2 className='text-sm'>Upazila: {userinfo?.upazella}</h2>              
                      </div>
                    </div>
                  </Dialog.Title>
                  <div className='mt-2 w-full '>{/* Update room form */}</div>
                  <hr className='mt-8' />
                  <div className='p-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                      onClick={() => setIsEditModalOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

UserInfoModal.propTypes = {
  setIsEditModalOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
};

export default UserInfoModal;
