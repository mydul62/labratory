import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AddTest = () => {
  const [startDate, setStartDate] = useState(new Date());
  const formatteddate = startDate.toISOString().split('T')[0];
 const axiosCommon = useAxiosCommon()
 const axiosSecure=useAxiosSecure()
  const handleServiceAdd = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const slot = form.slot.value;
    const imageFile = form.image.files[0];
    const category = form.category.value;
    // Handle image upload
    let imageUrl = '';
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);
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

    // Create service object
    const service = {
      title,
      description,
      price,
      image: imageUrl,
      date: formatteddate,
      slot,
      category
    };
     const postService = async()=>{
      const {data}= await axiosSecure.post("/alltest", service)
      if(data.insertedId){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Data has been inserted",
          showConfirmButton: false,
          timer: 1500
        })
      }
     }
     postService();
     
    
  };

  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'> 
    <div>
    <h2 className=" text-3xl font-bold font-Lora">  
    Add A Service
    </h2>
    </div>
      <form onSubmit={handleServiceAdd} className="md:w-[60%] mx-auto">
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

          <div className='p-4 bg-white w-full m-auto rounded-lg'>
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
                  <div className='bg-[#00d2d3] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    Upload Image
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className='flex justify-between gap-2'>
            <div className='space-y-1 w-full text-sm'>
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

            <div className='space-y-1 w-full text-sm'>
              <label htmlFor='slot' className='block text-gray-600'>
                Total Slots
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='slot'
                id='slot'
                type='number'
                placeholder='Total Slots'
                required
              />
            </div>
          </div>

          <div className='flex items-center justify-between gap-2'>
            <div className='space-y-1 w-full text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Category
              </label>
              <select
                required
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='category'
              >
                <option value="Cardiology">Cardiology</option>
                <option value="Computer diagnostic">Computer diagnostic</option>
                <option value="Massage">Massage</option>
                <option value="Neurosurgery">Neurosurgery</option>
                <option value="Uncategorized">Uncategorized</option>
                <option value="Urology">Urology</option>
              </select>
            </div>

            <div className='space-y-1 w-full text-sm'>
              <label htmlFor='date' className='block text-gray-600'>
                Date
              </label>
              <DatePicker
                className="flex items-center w-full px-4 md:px-32 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='description' className='block text-gray-600'>
              Details
            </label>
            <textarea
              id='description'
              className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800 border border-rose-300 focus:outline-[#00d2d3]'
              name='description'
            ></textarea>
          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#00d2d3]'
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
}

export default AddTest;
