import { useContext } from "react";
import { authContex } from "../Firebase/AuthProvider";

 const useAuthProvider = () => {
 const auth = useContext(authContex)
  return auth

};

export default useAuthProvider;