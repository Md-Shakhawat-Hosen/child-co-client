import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyPendingWorks = () => {
  const { user } = useContext(AuthContext);
  //    const [selectedValue, setSelectedValue] = useState("pending");

  const [myPendingWorks, setMyPendingWorks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/booking")
      .then((res) => res.json())
      .then((data) => setMyPendingWorks(data));
  }, []);

  // console.log(myPendingWorks)
  const otherBookedService = myPendingWorks.filter(
    (book) => book.serviceProviderEmail === user?.email
  );

  //   console.log(otherBookedService);

  const handlePendingWork = async (event, bookingId) => {
    const newValue = event.target.value;

    try {
      const response = await fetch(
        `http://localhost:5000/booking/${bookingId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: user.email, status: newValue }),
        }
      );

      if (response.ok) {
        // Update the local state if the server update was successful
        // setSelectedValue(newValue);
        setMyPendingWorks((prevWorks) =>
          prevWorks.map((booking) =>
            booking._id === bookingId
              ? { ...booking, status: newValue }
              : booking
          )
        );

        setTimeout(() => {
          window.location.reload();
        }, 100);
      } else {
        console.error(
          "Error updating status:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  //    console.log(selectedValue);

  return (
    <div className="my-6">
      <h1 className="font-bold text-center text-xl bg-cyan-300 p-6">
        My Pending Works
      </h1>
      <div>
        {otherBookedService.length === 0 ? (
          <p className="font-bold text-xl h-[40vh] justify-center flex items-center">
            There is no Pending works
          </p>
        ) : (
          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Image</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Service Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      provider Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      booked user Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                  </tr>
                </thead>
                {otherBookedService?.map((book) => (
                  <tbody key={book._id}>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-32 p-4">
                        <img src={book.serviceImage} alt="Iphone 12" />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {book.serviceName}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {book.date}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {book?.price}$
                      </td>
                      <td className="px-6 py-4 ont-semibold text-gray-900 dark:text-white">
                        <h1 className="font-medium ">
                          {book.serviceProviderEmail}
                        </h1>
                      </td>
                      <td className="px-6 py-4 ont-semibold text-gray-900 dark:text-white">
                        <h1 className="font-medium ">{book.email}</h1>
                      </td>
                      <td className="px-6 py-4 ont-semibold text-gray-900 dark:text-white">
                        <div className="font-medium ">
                          <form>
                            <select
                              value={book.status}
                              onChange={(e) => handlePendingWork(e, book._id)}
                            >
                              <option value="pending">pending</option>
                              <option value="in progress">in progress</option>
                              <option value="completed">completed</option>
                            </select>
                          </form>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPendingWorks;
