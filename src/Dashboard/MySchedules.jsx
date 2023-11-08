import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyPendingWorks from "./MyPendingWorks/MyPendingWorks";

const MySchedules = () => {
  const [myBooking, setMyBooking] = useState([]);
  const { user } = useContext(AuthContext);
  const url =`https://child-co-server.vercel.app/booking?email=${user?.email}`;
  useEffect(() => {
    // fetch(`https://child-co-server.vercel.app/booking?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setMyBooking(data));
    axios.get(url, {withCredentials:true})
    .then(res =>{
      setMyBooking(res.data)
    })
  }, [url]);

  //   console.log(myBooking);
  return (
    <div className="px-4">
      <h1 className="text-center font-bold text-xl my-6 bg-cyan-300 p-6">
        My bookings
      </h1>
      {myBooking?.length === 0 ? (
        <p className="font-bold text-xl h-[40vh] justify-center flex items-center">
          There is no booking
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
                    Status
                  </th>
                </tr>
              </thead>
              {myBooking?.map((book) => (
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
                      <h1 className="font-medium ">{book?.status}</h1>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      )}

      <div>
        <MyPendingWorks></MyPendingWorks>
      </div>
    </div>
  );
};

export default MySchedules;
