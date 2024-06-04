import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import FadeLoader from "react-spinners/ClipLoader";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";


const PriveteRoutes = ({children}) => {
const {user,loading}=useAuth();
const location = useLocation();
if(loading){
return <LoadingSpinner></LoadingSpinner>
}
if(user){
return children
}else{
  return <Navigate to="/login" state={location?.pathname || "/"} replace={true} />
}
};

export default PriveteRoutes;