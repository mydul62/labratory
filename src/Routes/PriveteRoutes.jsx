import { Navigate, useLocation } from "react-router-dom";
import useAuthProvider from "../Hooks/useAuthProvider";

import {  InfinitySpin } from 'react-loader-spinner'

const PriveteRoutes = ({children}) => {
const {user,loading}=useAuthProvider();
const location = useLocation();
if(loading){
return <div className=" min-h-screen flex justify-center items-center">
 <InfinitySpin
 visible={true}
 width="200"
 color="#4fa94d"
 ariaLabel="infinity-spin-loading"
/>
</div>
}
if(user){
return children
}else{
  return <Navigate to="/login" state={location?.pathname || "/"} replace={true} />
}
};

export default PriveteRoutes;