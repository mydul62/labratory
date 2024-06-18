import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import DashBoard from "../Layout/DashBoard/DashBoard";
import AllTest from "../Pages/AllTest/AllTest";
import PriveteRoutes from "./PriveteRoutes";
import Profile from "../Pages/MyProfile/Profile";
import TestDetails from "../Pages/AllTest/TestDetails";
import ManageUser from "../Layout/DashBoard/DashBoardComponents/ManageUser";
import AddTest from "../Layout/DashBoard/AddTest";
import UpcommingAppointments from "../Layout/DashBoard/DashBoardComponents/UpcommingAppointments";
import AllServiceData from "../Layout/DashBoard/AllTestData/AllServiceData";
import UserDoc from "../Layout/DashBoard/UserDoc";
import AdminDeshBoard from "../Layout/DashBoard/AmdinDashBoard/AdminDeshBoard";
import UpdateService from "../Layout/DashBoard/AllTestData/UpdateService";
import ReserVatons from "../Layout/DashBoard/AllTestData/Reservations/ReserVatons";
import ContactPage from "../Pages/ContactPage/ContactPage";
import Banner from "../Pages/Home/Home-Components/Banner/Banner";
import Banners from "../Layout/DashBoard/AddBanners/Banners";
import TestResult from "../Layout/DashBoard/DashBoardComponents/TestResult/TestResult";
import AboutUs from "../Pages/AboutUs/AboutUs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BlogSection from "../Pages/BlogSection/BlogSection";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/alltest",
        element: <AllTest />
      },
      {
        path: "/testdetail/:id",  
        element:<PriveteRoutes> <TestDetails /></PriveteRoutes>
      },
      {
        path: "/contactus",
        element: <ContactPage></ContactPage>
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/blog",
        element: <BlogSection></BlogSection>
      },
    ]
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <PriveteRoutes><DashBoard /></PriveteRoutes>,
    children: [
      {
        index: true,
        element: <PriveteRoutes><Profile></Profile></PriveteRoutes>
      },
      {
        path:'admindashboard',
        element: <PriveteRoutes><AdminDeshBoard></AdminDeshBoard></PriveteRoutes>
      },
      {
        path: 'alltest',
        element: <PriveteRoutes><AllServiceData></AllServiceData></PriveteRoutes>
      },
      
      {
        path: 'manageusers',
        element: <PriveteRoutes><ManageUser></ManageUser></PriveteRoutes>
      },
      {
        path: 'addtest',
        element: <PriveteRoutes><AddTest></AddTest></PriveteRoutes>
      },
      {
        path: 'upcommingappoinments',
        element: <PriveteRoutes><UpcommingAppointments/></PriveteRoutes>
      },
      {
        path: 'userDocuments/:email',
        element: <PriveteRoutes><UserDoc></UserDoc></PriveteRoutes>
      },
      {
        path: 'Updates/:id',
        element: <PriveteRoutes><UpdateService></UpdateService></PriveteRoutes>
      },
      {
        path: 'reservation/:id',
        element: <PriveteRoutes><ReserVatons></ReserVatons></PriveteRoutes>
      },
      {
        path: 'banners',
        element: <PriveteRoutes><Banners></Banners></PriveteRoutes>
      },
      {
        path: 'test-result',
        element: <PriveteRoutes><TestResult></TestResult></PriveteRoutes>
      },
    ]
  }
]);
const Routes = () => {
  return (
    <div>
      
    </div>
  );
};

export default Routes;