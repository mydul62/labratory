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
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        element: <TestDetails />
      },
      {
        path: "registration",
        element: <Registration />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PriveteRoutes><DashBoard /></PriveteRoutes>,
    children: [
      {
        path: 'alltest',
        element: <AllTest />
      },
      {
        path: 'profile',
        element: <PriveteRoutes><Profile></Profile></PriveteRoutes>
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