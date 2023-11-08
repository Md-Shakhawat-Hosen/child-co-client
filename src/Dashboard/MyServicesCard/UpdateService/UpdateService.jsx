import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const UpdateService = () => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    serviceName,
    serviceImage,
    serviceDescription,
    servicePrice,
    serviceArea,
  } = useLoaderData();
  // console.log(ser)

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = user?.displayName;
    const email = user?.email;
    const image = user?.photoURL;
    const serviceName = form.serviceName.value;
    const serviceImage = form.serviceImage.value;
    const servicePrice = form.servicePrice.value;
    const serviceArea = form.serviceArea.value;
    const serviceDescription = form.serviceDescription.value;

    const addService = {
      serviceImage,
      serviceName,
      serviceDescription,

      serviceProvider: {
        image,
        name,
        email,
      },
      servicePrice,
      serviceArea,
    };

    console.log(addService);

    fetch(`https://child-co-server.vercel.app/services/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("successfully Updated");
        }
      });
  };
  return (
    <div className="px-4">
      <div>
        <Toaster />
      </div>
      <form onSubmit={handleUpdate}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              id="first_name"
              defaultValue={user?.displayName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="your_email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              id="your_email"
              defaultValue={user?.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              disabled
            />
          </div>
          <div>
            <label
              htmlFor="serviceName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Service Name
            </label>
            <input
              type="text"
              id="serviceName"
              name="serviceName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={serviceName}
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="servicePrice"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={servicePrice}
              required
            />
          </div>
          <div>
            <label
              htmlFor="website"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="website"
              name="serviceImage"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={serviceImage}
              required
            />
          </div>
          <div>
            <label
              htmlFor="serviceArea"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Service Area
            </label>
            <input
              type="text"
              id="serviceArea"
              name="serviceArea"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={serviceArea}
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Service Description
            </label>
            <textarea
              id="message"
              name="serviceDescription"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={serviceDescription}
            ></textarea>
          </div>
        </div>

        <div className="text-center my-6">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateService;
