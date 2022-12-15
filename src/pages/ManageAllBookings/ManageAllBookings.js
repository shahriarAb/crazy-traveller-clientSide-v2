import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";

const ManageAllBookings = () => {
   const [manageBookings, setManageBookings] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setIsLoading(true);
      fetch("http://localhost:5500/bookings")
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
         const url = `http://localhost:5500/bookings/${id}`;
         fetch(url, {
            method: "DELETE",
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount) {
                  alert("Successfully deleted this booking!");
                  const remainingBookings = manageBookings.filter(
                     (allbooking) => allbooking._id !== id
                  );
                  setManageBookings(remainingBookings);
               }
            });
      }
   };

   const handleStatus = (id) => {
      const url = `http://localhost:5500/bookings/${id}`;
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
               alert("Status updated!");
               window.location.reload();
            }
         });
   };

   if (isLoading) {
      return <Loading></Loading>;
   }
   return (
      <div>
         <h2 className="ml-8 mt-8 text-2xl font-bold text-red-500">
            My all bookings
         </h2>
         {manageBookings.length === 0 ? (
            <p className="text-center mt-10 font-semibold text-lg text-red-500">
               *No booking found on database yet!
            </p>
         ) : (
            manageBookings.map((booking) => (
               <div
                  key={booking._id}
                  className="bg-gray-100 mt-10 lg:mx-16 p-6 rounded-md shadow-md font-semibold"
               >
                  <div>
                     <span>
                        <i className="far fa-user"></i>User: {booking.email}
                     </span>
                     <span className="bg-yellow-500 rounded-md p-1 ml-4">
                        {booking.status}
                     </span>
                  </div>
                  <span className="text-lg">
                     <i className="fas fa-map-marked-alt"></i> Destination:{" "}
                     {booking.destination}
                  </span>
                  <span className="lg:ml-6">
                     <i className="fas fa-igloo"></i> Package: 3 Days &bull; 2
                     Nights
                  </span>
                  <span className="lg:ml-6">
                     <i className="fas fa-phone-square"></i> Phone:{" "}
                     {booking.phone_number}
                  </span>
                  <span className="lg:ml-6">
                     <i className="fas fa-plane-departure"></i> Transport:{" "}
                     {booking.vehicles}
                  </span>
                  <span className="ml-6">
                     <i className="fas fa-clock"></i> Time:{" "}
                     {booking.journey_time}
                  </span>
                  <button
                     onClick={() => handleDelete(booking._id)}
                     className="bg-red-500 float-right text-white px-2 py-1 rounded-md hover:bg-red-600 hover:shadow-lg ml-2"
                  >
                     Delete
                  </button>
                  <button
                     onClick={() => handleStatus(booking._id)}
                     className="bg-green-500 float-right text-white px-2 py-1 rounded-md hover:bg-green-600 hover:shadow-lg"
                  >
                     Approve
                  </button>
               </div>
            ))
         )}
      </div>
   );
};

export default ManageAllBookings;
