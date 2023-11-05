import { createBrowserRouter } from "react-router-dom";
import AllServices from "../Components/AllServices/AllServices";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Services from "../pages/Services";
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
        path: "/services",
        element: <Services></Services>,
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
        path: "/all-services",
        element: <AllServices></AllServices>,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default myRoute;