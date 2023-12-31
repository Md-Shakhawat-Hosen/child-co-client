import { NavLink } from "react-router-dom";


const FilterServices = ({filterservice}) => {


    const {
        _id,
      serviceName,
      serviceImage,
      serviceDescription,
      servicePrice,
      serviceArea,
      serviceProvider,
    } = filterservice;
    return (
      <div className="px-4">
        <div className=" items-center bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex-1">
            <img
              className="w-full h-[300px] rounded"
              src={serviceImage}
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-400 dark:text-white">
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
              <p className="text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
                {serviceProvider.name}
              </p>
            </div>
            <div className="">
              <p className="text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
                Service Area: {serviceArea}
              </p>
              <p className="text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
                Service Price: {servicePrice}$
              </p>
            </div>

            <div className="mt-6">
              <NavLink
                to={`/services/${_id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Details
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
        </div>
      </div>
    );
};

export default FilterServices;