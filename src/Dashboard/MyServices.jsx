import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyServicesCard from "./MyServicesCard/MyServicesCard";

const MyServices = () => {
  const { user } = useContext(AuthContext);

  const [myAddedServices, setMyAddedServices] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://child-co-server.vercel.app/services?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyAddedServices(data));
    }
  }, [user?.email]);

  // console.log(myAddedServices)

  return (
    <div>
      <div className="grid grid-cols-1 gap-6">
        {myAddedServices?.map((addService) => (
          <MyServicesCard
            key={addService._id}
            addService={addService}
            myAddedServices={myAddedServices}
            setMyAddedServices={setMyAddedServices}
          ></MyServicesCard>
        ))}
      </div>
    </div>
  );
};

export default MyServices;
