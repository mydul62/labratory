import axios from "axios";

const useGetUrl =async (profilePhoto) => {
    const formData = new FormData();
    formData.append("image", profilePhoto);
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_iMGBB_API_KEY}`,
      formData
    )
    console.log(data);
  return {data};
};

export default useGetUrl;