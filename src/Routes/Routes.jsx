import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import DashBoard from "../Layout/DashBoard/DashBoard";
import AllTest from "../Pages/AllTest/AllTest";
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
    element: <DashBoard />,
    children: [
      {
        path: 'alltest',
        element: <AllTest />
      }
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