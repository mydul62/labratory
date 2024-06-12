import PropTypes from 'prop-types';
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { Fragment } from 'react';
const UserStatusModal = ({setStatusOpen,isStatusOpen,email}) => {
  return (
    <Transition appear show={isStatusOpen} as={Fragment}>
    <Dialog
      as="div"
      className="relative z-10"
      onClose={() => setStatusOpen(false)}
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
                  <form
                  >
                    <div className='p-6'>
                      <div className='flex flex-col gap-4'>
                        <label htmlFor='status' className='text-gray-700'>
                          Status
                        </label>
                        <select
                          id='status'
                          name='status'
                          value={'activce'}
                          className='block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                        >
                          <option value='active'>Active</option>
                          <option value='blocked'>Blocked</option>
                        </select>
                      </div>
                    </div>
                    <hr className='mt-8' />
                    <div className='p-4 flex justify-end gap-4'>
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                       
                      >
                        Cancel
                      </button>
                      <button
                        type='submit'
                        className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      >
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
                  onClick={() => setStatusOpen(false)}
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

export default UserStatusModal;