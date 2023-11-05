import { useState } from "react";
import useServices from "../../Hooks/useServices";
import FilterServices from "./FilterServices";


const AllServices = () => {

    const [showServices, setShowAllServices] = useState([])

    const [show, setShow] = useState(false);

    const {services} = useServices();

    // console.log(services)

    

    const handleSearch = event =>{
        event.preventDefault();
        const form = event.target;
        const nameText = form.name.value;

        if (nameText) {
            setShow(true)
        }

        console.log(nameText.toLowerCase());

        const filterServices = services.filter(service => service.serviceName.toLowerCase().includes(nameText.toLowerCase()));

        setShowAllServices(filterServices);


    }

    const handleShowMore = () => {
        setShow(false)
        setShowAllServices(services)
    }
    return (
      <div>
        <div className="my-9">
          <form onSubmit={handleSearch}>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                name="name"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by service name"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {showServices.map((filterservice) => (
            <FilterServices
              key={filterservice._id}
              filterservice={filterservice}
            ></FilterServices>
          ))}
        </div>

        <div className="my-6 text-center">
          {show && (
            <button
              onClick={handleShowMore}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Show More
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
          )}
        </div>
      </div>
    );
};

export default AllServices;