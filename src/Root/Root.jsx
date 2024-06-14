import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Home-Components/Navbar/Navbar";
import Footer from "../Pages/Home/Home-Components/Footer/Footer";

const Root = () => {
  return (
    <div>
     <div className="absolute  w-full top-0 z-50">
     <Navbar></Navbar>
     </div>
      <div className="min-h-[calc(100vh-550px)] ">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;