import { useQuery } from "@tanstack/react-query";
import useAuthProvider from "../Hooks/useAuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const useAdmin = () => {
const {user}=useAuthProvider();
const email = user.email;
const axiosSecure = useAxiosSecure()
const { data:admin} = useQuery({
  queryKey: ["isAdmin",email],
  queryFn: async () => {
    const { data } = await axiosSecure.get(`/allusers/email/isadmin/${email}`);
    return data;
  },
});
  return {admin}
};

export default useAdmin;