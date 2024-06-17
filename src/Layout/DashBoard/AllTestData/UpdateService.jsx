import { useNavigate, useParams } from "react-router-dom";
import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import axios from "axios";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from 'sweetalert2';
import { setLogLevel } from "firebase/app";

const UpdateService = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const navigate = useNavigate();

  // Find data from MongoDB by id using useQuery
  const { data: formDatas, refetch } = useQuery({
    queryKey: ["tests", id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/Alltests/tests/test/${id}`);
      return data;
    }
  });

  // State to manage the selected date
  const [startDate, setStartDate] = useState(new Date());

  // Update startDate when formDatas changes
  useEffect(() => {
    if (formDatas) {
      setStartDate(new Date(formDatas.date));
    }
  }, [formDatas]);

  const formattedDate = startDate.toISOString().split('T')[0];

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get('/categories.json');
      return data;
    }
  });

  const handleUpdateData = async (e) => {
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
      image: imageUrl ? imageUrl : formDatas.image,
      date: formattedDate,
      slot,
      category
    };
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Update it!"
    });

    if (result.isConfirmed) {
      try {
        const { data } = await axiosSecure.put(`/Alltests/tests/test/update/${id}`, service);
        console.log(data);
        navigate("/dashboard/alltest");
      } catch (error) {
        console.error('Error updating service:', error);
      }
      refetch();
      form.reset();
      form.image.value = null;
      Swal.fire({
        title: "Updated!",
        text: "Your file has been updated.",
        icon: "success"
      });
    }
  };

  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <div className="my-3">
        <h3 className="text-2xl">Update Your data Now</h3>
      </div>
      <form onSubmit={handleUpdateData} className="md:w-[60%] mx-auto">
        <div className='space-y-6'>
          <div className='space-y-1 text-sm'>
            <label htmlFor='title' className='block text-gray-600'>
              Title
            </label>
            <input defaultValue={formDatas?.title}
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
                  <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
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
                defaultValue={formDatas?.price}
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
                defaultValue={formDatas?.slot}
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
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md'
                name='category'
              >
                {categories?.map((category, i) => (
                  <option key={i} value={category?.category} selected={formDatas?.category === `${category?.category}`}>{category?.category}</option>
                ))}
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
              defaultValue={formDatas?.description}
              id='description'
              className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500'
              name='description'
            ></textarea>
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
  );
};

export default UpdateService;
