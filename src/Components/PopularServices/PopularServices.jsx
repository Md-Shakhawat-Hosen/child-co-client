import { useState } from "react";
import { useEffect } from "react";
import ServicesCard from "./ServicesCard";


const PopularServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
      <div className="px-4 my-32">
        <h1 className="text-xl font-bold text-center mb-14">Popular Services</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServicesCard key={service._id} service={service}></ServicesCard>
          ))}
        </div>
      </div>
    );
};

export default PopularServices;