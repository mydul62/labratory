import { Navigate, useLocation } from "react-router-dom";
import useAuthProvider from "../Hooks/useAuthProvider";

import { FidgetSpinner } from 'react-loader-spinner'

const PriveteRoutes = ({children}) => {
const {user,loading}=useAuthProvider();
const location = useLocation();
if(loading){
return <div className=" min-h-screen flex justify-center items-center">
 <FidgetSpinner
visible={true}
height="80"
width="80"
ariaLabel="fidget-spinner-loading"
wrapperStyle={{}}
wrapperClass="fidget-spinner-wrapper"
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