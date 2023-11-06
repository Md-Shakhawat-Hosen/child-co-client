import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyServicesCard from "./MyServicesCard/MyServicesCard";


const MyServices = () => {
    const {user} = useContext(AuthContext);

    const [myAddedServices, setMyAddedServices] = useState([])

    useEffect(()=>{
        if (user?.email) {
           fetch(`http://localhost:5000/services?email=${user.email}`)
             .then((res) => res.json())
             .then((data) => setMyAddedServices(data));
        }
        
    },[user?.email])

// console.log(myAddedServices)
    
    return (
      <div>
        <p>{myAddedServices.length}</p>
        
        <div className="grid grid-cols-1 gap-6">
            {
               myAddedServices?.map(addService => <MyServicesCard key={addService._id} addService={addService} ></MyServicesCard>)
            }
        </div>
      </div>
    );
};

export default MyServices;