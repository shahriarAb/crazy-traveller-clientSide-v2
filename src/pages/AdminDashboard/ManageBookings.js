import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageBookings = () => {
   const [manageBookings, setManageBookings] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setIsLoading(true);
      fetch("https://crazy-traveler-server.onrender.com/bookings")
         .then((res) => res.json())
         .then((data) => {
            setManageBookings(data);
            setIsLoading(false);
         });
   }, []);

   const handleDelete = (id) => {
      const proceedToDelete = window.confirm(
         "Are you sure you want to delete this booking?"
      );
      if (proceedToDelete) {
         const url = `https://crazy-traveler-server.onrender.com/bookings/${id}`;
         fetch(url, {
            method: "DELETE",
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount) {
                  toast.error("Successfully deleted the booking.", {
                     position: "top-center",
                     autoClose: 4000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     progress: undefined,
                     theme: "light",
                  });
                  const remainingBookings = manageBookings.filter(
                     (allbooking) => allbooking._id !== id
                  );
                  setManageBookings(remainingBookings);
               }
            });
      }
   };

   const handleStatus = (id) => {
      const url = `https://crazy-traveler-server.onrender.com/bookings/${id}`;
      fetch(url, {
         method: "PUT",
         headers: {
            "content-type": "application.json",
         },
         body: JSON.stringify(manageBookings.status),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.modifiedCount) {
               toast.success("Status updated.", {
                  position: "top-center",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  progress: undefined,
                  theme: "light",
               });
               window.location.reload();
            }
         });
   };

   if (isLoading) {
      return <Loading></Loading>;
   }

   return (
      <div>
         <h2 className="ml-8 text-2xl font-bold text-red-500">All Bookings</h2>
         {manageBookings.length === 0 ? (
            <p className="text-center mt-10 font-semibold text-lg text-red-500">
               *No booking found on database yet!
            </p>
         ) : (
            manageBookings.map((booking) => (
               <div
                  key={booking._id}
                  className="bg-gray-100 mt-10 lg:mx-16 p-6 rounded-md shadow-md font-semibold mx-3"
               >
                  <div>
                     <span>
                        <i className="far fa-user"></i>User: {booking.email}
                     </span>
                     <span className="bg-black rounded-md p-1 ml-4 text-white">
                        {booking.status}
                     </span>
                  </div>
                  <span className="text-lg mt-2">
                     <i className="fas fa-map-marked-alt"></i> Destination:{" "}
                     {booking.destination}
                  </span>
                  <span className="lg:ml-6 lg:inline block">
                     <i className="fas fa-igloo"></i> Package: 3 Days &bull; 2
                     Nights
                  </span>
                  <span className="lg:ml-6 lg:inline block">
                     <i className="fas fa-phone-square"></i> Phone:{" "}
                     {booking.phone_number}
                  </span>
                  <span className="lg:ml-6 lg:inline block">
                     <i className="fas fa-plane-departure"></i> Transport:{" "}
                     {booking.vehicles}
                  </span>
                  <span className="lg:ml-6 lg:inline block">
                     <i className="fas fa-clock"></i> Time:{" "}
                     {booking.journey_time}
                  </span>
                  <br className="lg:inline hidden" />
                  <span className="lg:inline block">
                     <i class="fas fa-calendar-alt"></i> Jouenry Date:{" "}
                     {booking.journeyDate}
                  </span>
                  <span className="lg:ml-6 lg:inline block">
                     <i className="fas fa-clock"></i> Time:{" "}
                     {booking.journey_time}
                  </span>
                  <span className="lg:ml-6 lg:inline block">
                     <i class="fas fa-tag"></i> Price: MRP {booking.price} /-
                  </span>
                  <div className="flex justify-center mt-2">
                     <button
                        onClick={() => handleStatus(booking._id)}
                        className={
                           booking.status === "Approved"
                              ? "btn btn-sm btn-disabled"
                              : "btn btn-sm bg-green-500"
                        }
                     >
                        Approve
                     </button>
                     <button
                        onClick={() => handleDelete(booking._id)}
                        className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700 hover:shadow-lg ml-2"
                     >
                        Delete
                     </button>
                  </div>
               </div>
            ))
         )}
         <ToastContainer />
      </div>
   );
};

export default ManageBookings;
