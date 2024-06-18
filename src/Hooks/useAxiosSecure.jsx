import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import useAuthProvider from './useAuthProvider';

const instance = axios.create({
  baseURL: import.meta.env.VITE_PULIC_URL,
  
});

const useAxiosSecure = () => {
const navigate = useNavigate()
const {logout}= useAuthProvider()
  instance.interceptors.request.use(function(config){
  const token = localStorage.getItem('access-token');
  // console.log("request stoped by interceptor",token);
  config.headers.authorization = `Bearer ${token}`;
  return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  })
  
  // interceptor response
  instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = error.response.status;
    if(status===401 || status===403){
    logout();
    navigate('/login')
    }
    return Promise.reject(error);
  });
  
  
  return instance
};

export default useAxiosSecure;