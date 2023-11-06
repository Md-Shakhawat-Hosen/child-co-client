import { createBrowserRouter } from "react-router-dom";
import AllServices from "../Components/AllServices/AllServices";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import MyAddServices from "../Dashboard/MyAddServices";
import MySchedules from "../Dashboard/MySchedules";
import MyServices from "../Dashboard/MyServices";
import UpdateService from "../Dashboard/MyServicesCard/UpdateService/UpdateService";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Root from "../Root/Root";


const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/my-services",
        element: (
          <PrivateRoute>
            <MyServices></MyServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateService/:id",
        element: <UpdateService></UpdateService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/add-services",
        element: (
          <PrivateRoute>
            <MyAddServices></MyAddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-schedules",
        element: <MySchedules></MySchedules>,
      },
    ],
  },
]);

export default myRoute;