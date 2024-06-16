import axios from 'axios';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2'

const AddBanner = ({refetch}) => {
  const axiosSecure = useAxiosSecure()
  const handleBannerAdd = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const couponCode = form.couponCode.value;
    const discountRate = form.discountRate.value;
    const text = form.text.value;
    const imageFile = form.image.files[0];
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

    const bannerData = {
      title,
      couponCode,
      discountRate,
      text,
      image: imageUrl,
      isActive: false,
    };

    console.log(bannerData);
    try {
      const { data } = await axiosSecure.post('/all_banners', bannerData);
      if(data.insertedId){
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
      // Reset the form after successful submission
      form.reset();
    } catch (error) {
      console.error('Error adding banner:', error);
    }
  };

  return (
    <section className="max-w-4xl p-6 mx-auto  bg-white rounded-md shadow-md dark:bg-gray-800">
      <div className="flex justify-center my-6">
        <h2 className="uppercase inline-block text-center border-[#00d2d3] text-2xl border-b-4 rounded-b-lg font-semibold text-gray-700">Add Banner</h2>
      </div>
      <form onSubmit={handleBannerAdd}>
        <div className="space-y-4">
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="title">Title</label>
            <input
              id="title"
              required
              name="title"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="couponCode">Coupon Code</label>
            <input
              id="couponCode"
              required
              name="couponCode"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="discountRate">Discount Rate</label>
            <input
              id="discountRate"
              required
              name="discountRate"
              type="number"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="text">Text</label>
            <input
              id="text"
              required
              name="text"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div className="flex justify-center items-center">
            <div>
              <label htmlFor="file" className="block text-sm text-gray-500">File</label>
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center w-full p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-full mx-auto h-8 text-gray-500 dark:text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Payment File</h2>
                <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                  Upload or drag & drop your file SVG, PNG, JPG, or GIF.
                </p>
                <input
                  id="dropzone-file"
                  required
                  type="file"
                  name="image"
                  className="hidden"
                />
                <span className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  {/* {selectedFile ? `Selected file: ${selectedFile.name}` : 'No file selected'} */}
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform rounded-md  focus:outline-none bg-[#00d2d3]">
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddBanner;
