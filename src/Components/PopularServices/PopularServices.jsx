// import { useState } from "react";
// import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useServices from "../../Hooks/useServices";
import ServicesCard from "./ServicesCard";


const PopularServices = () => {

  const {services} = useServices();

  // console.log(services)
    // const [services, setServices] = useState([])
    // useEffect(()=>{
    //     fetch("http://localhost:5000/services")
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // },[])
    return (
      <div className="px-4 my-32">
        <h1 className="text-xl font-bold text-center mb-14">
          Popular Services
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServicesCard key={service._id} service={service}></ServicesCard>
          ))}
        </div>
        <div className="text-center mt-9">
          <NavLink
            to="/all-services"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Show All
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    );
};

export default PopularServices;