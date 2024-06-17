import axios from 'axios'
const useAxiosSecure = () => {

  const instance = axios.create({
    baseURL: import.meta.env.VITE_PULIC_URL,
    
  });
  return instance
};

export default useAxiosSecure;