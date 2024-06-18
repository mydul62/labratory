
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import useAxiosCommon from "../Hooks/useAxiosCommon";
export const authContex = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
   const [loading,setLoading]=useState(true)
   const axiosCommon = useAxiosCommon()
   
   
  const registerWithPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignInWithPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
   const passwordReset =(email)=>{
      return sendPasswordResetEmail(auth, email)
   }

  const logout = () => {
    signOut(auth)
      .then(() => {
       
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
const unSubscriber =onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
      const userInfo = {email: currentUser.email}
        axiosCommon.post("/jwt",userInfo)
        .then(res=>{
          if(res.data.token){
             localStorage.setItem("access-token",res.data.token)
          }
        })
      }else{
         localStorage.removeItem("access-token")
      }
      setLoading(false);
    });
    return ()=>{
       return unSubscriber();
    }
  }, [axiosCommon]);

  const authInfo = {
    user,
    registerWithPassword,
    SignInWithPassword,
    logout,
    loading,
    passwordReset,
  };
  return <authContex.Provider value={authInfo}>{children}</authContex.Provider>;
};

export default AuthProvider;
