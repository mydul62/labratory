import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import DashBoard from "../Layout/DashBoard/DashBoard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
    {
    path:'/',
    element:<Home></Home>
    },
    {
    path:'/registration',
    element:<Registration></Registration>
    },
    {
    path:'/login',
    element:<Login></Login>
    }
    
    ],
  },
  {
  path:'dashboard',
  element:<DashBoard></DashBoard>
  
  }
]);
const Routes = () => {
  return (
    <div>
      
    </div>
  );
};

export default Routes;