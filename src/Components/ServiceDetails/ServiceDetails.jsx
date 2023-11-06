import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const ServiceDetails = () => {
    const {user} = useContext(AuthContext)

    console.log(user);

    const serviceDetails = useLoaderData();

     const { serviceName, serviceImage, serviceDescription, serviceArea, servicePrice,serviceProvider } = serviceDetails;

     const handlePurchase = event =>{
        event.preventDefault();
        const form = event.target;

        const name = serviceName
        const providerEmail = serviceProvider.email
        const userEmail = user?.email || 'not found';
        const date = form.date.value;
        const address = form.address.value;
        const price = servicePrice;


        const userBooking = {name, providerEmail, userEmail, date, address, price}

        console.log(userBooking)



        fetch(
          "http://localhost:5000/booking",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userBooking),
          }
        )
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            if(data.insertedId) {
                toast.success('Booking successfully')
            }
        })
     }
    return (
      <div className="px-4">
        <div>
          <Toaster />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-9">
            <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg w-full h-[300px]"
                src={serviceImage}
                alt=""
              />
              <div className="p-5">
                <div className="flex justify-between">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {serviceName}
                  </h5>

                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {servicePrice}$
                  </h5>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {serviceDescription}
                </p>

                <div className="flex items-center justify-between">
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
                  <div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                      }
                    >
                      Book Now
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
                    <dialog id="my_modal_3" className="modal">
                      <div className="modal-box">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>

                        <div>
                          <img
                            className="rounded-t-lg w-full h-[300px] my-2"
                            src={serviceImage}
                            alt=""
                          />
                        </div>
                        <form onSubmit={handlePurchase}>
                          <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Service Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              defaultValue={serviceName}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              disabled
                            />
                          </div>
                          <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Service Provider Email
                            </label>
                            <input
                              type="text"
                              name="providerEmail"
                              defaultValue={serviceProvider.email}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              disabled
                            />
                          </div>
                          <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Your Email
                            </label>
                            <input
                              type="text"
                              name="userEmail"
                              defaultValue={user?.email || "Not Found"}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              disabled
                            />
                          </div>
                          <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Service Taking Date
                            </label>
                            <input
                              type="date"
                              name="date"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Your Address
                            </label>
                            <input
                              type="text"
                              name="address"
                              placeholder="your address"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                          </div>
                          <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Price
                            </label>
                            <input
                              type="text"
                              name="price"
                              defaultValue={servicePrice}
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              disabled
                            />
                          </div>

                          <button className="btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Purchase this Service
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
                        </form>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={serviceProvider.image}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {serviceProvider.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {serviceArea}
                </span>
                {/* <p className="px-2">{serviceProvider?.description || ''}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;