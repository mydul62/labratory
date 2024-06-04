import { useState } from "react";
import DatePicker from "react-datepicker";

const AddTest = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            
         
            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Category
              </label>
              <select
                required
                className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                name='category'
              >
  
                  <option >Cardiology </option>
                  <option value=""> Computer diagnostic</option>
                  <option value=""> Massage</option>
                  <option value=""> Neurosurgery</option>
                  <option value=""> Uncategorized</option>
                  <option value=""> Urology</option>
              </select>
            </div>
            <DatePicker className=" block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" selected={startDate} onChange={(date) => setStartDate(date)} />
            <div className='space-y-1'>
              <label htmlFor='location' className='block text-gray-600'>
                Select Availability Range
              </label>
              {/* Calender */}
            </div>
          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Title
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='title'
                id='title'
                type='text'
                placeholder='Title'
                required
              />
            </div>

            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                      Upload Image
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='guest' className='block text-gray-600'>
                 Total Slots
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='Total_Slots'
                  id='slot'
                  type='number'
                  placeholder='Total Slots'
                  required
                />
              </div>
            </div>

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='bedrooms' className='block text-gray-600'>
                  Bedrooms
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='bedrooms'
                  id='bedrooms'
                  type='number'
                  placeholder='Bedrooms'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='bathrooms' className='block text-gray-600'>
                  Bathrooms
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                  name='bathrooms'
                  id='bathrooms'
                  type='number'
                  placeholder='Bathrooms'
                  required
                />
              </div>
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                id='description'
                className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                name='description'
              ></textarea>
            </div>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Save & Continue
        </button>
      </form>
    </div>
  )
}

export default AddTest;