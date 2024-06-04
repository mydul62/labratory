import axios from 'axios'
const useAxiosCommon = () => {

  const instance = axios.create({
    baseURL: 'http://localhost:5000',
  });
  return instance
};

export default useAxiosCommon;