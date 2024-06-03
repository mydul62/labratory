import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Home/Home-Components/Navbar/Navbar";
import Footer from "../Pages/Home/Home-Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-550px)]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;