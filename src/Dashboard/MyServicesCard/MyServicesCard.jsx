// import { useContext } from "react";

import Swal from "sweetalert2";

import { NavLink } from "react-router-dom";

// import { AuthContext } from "../../Provider/AuthProvider";

const MyServicesCard = ({
  addService,
  myAddedServices,
  setMyAddedServices,
}) => {
  // const {user} = useContext(AuthContext);

  const {
    _id,
    serviceName,
    serviceImage,
    serviceDescription,
    servicePrice,
    serviceArea,
    serviceProvider,
  } = addService;

  const handleDeleteService = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/services/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              const remaining = myAddedServices.filter(
                (oneService) => oneService._id !== id
              );
              setMyAddedServices(remaining);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="px-4">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex-1">
            <img
              className="w-full h-[400px] rounded-l-lg"
              src={serviceImage}
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {serviceName}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {serviceDescription}
            </p>
            <div className="flex items-center gap-4 mb-2">
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={serviceProvider.image}
                alt=""
              />
              <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {serviceProvider.name}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Service Area: {serviceArea}
              </p>
              <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Price: {servicePrice}$
              </p>
            </div>

            <div className="mt-6">
              <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <div className="flex gap-6">
                  <NavLink
                    to={`/updateService/${_id}`}
                    className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Edit
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
                  <button
                    onClick={() => handleDeleteService(_id)}
                    className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Delete
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
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServicesCard;
