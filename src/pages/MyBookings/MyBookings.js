import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../Shared/Loading";

const MyBookings = () => {
   const { user, signingOut } = useAuth();
   const [allbookings, setAllbookings] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const navigate = useNavigate();

   useEffect(() => {
      setIsLoading(true);
      fetch(
         `https://crazy-traveler-server.onrender.com/my-bookings?email=${user.email}`,
         {
            mathod: "GET",
            headers: {
               authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
         }
      )
         .then((res) => {
            if (res.status === 401 || res.status === 403) {
               navigate("/");
               localStorage.removeItem("accessToken");
               signingOut();
            }
            return res.json();
         })
         .then((data) => {
            setAllbookings(data);
            setIsLoading(false);
         });
   }, [user.email, navigate, signingOut]);

   const handleCancel = (id) => {
      const proceedToDelete = window.confirm(
         "Are you sure you want to cancel this booking?"
      );
      if (proceedToDelete) {
         const url = `https://crazy-traveler-server.onrender.com/bookings/${id}`;
         fetch(url, {
            method: "DELETE",
         })
            .then((res) => res.json())
            .then((result) => {
               if (result.deletedCount) {
                  alert("Successfully canceled this booking!");
                  const remainingBooks = allbookings.filter(
                     (allbooking) => allbooking._id !== id
                  );
                  setAllbookings(remainingBooks);
               }
            });
      }
   };

   if (isLoading) {
      return <Loading></Loading>;
   }
   return (
      <div className="mb-40">
         <h2 className="ml-8 mt-8 text-2xl font-bold text-red-500">
            My all bookings
         </h2>
         {allbookings.length === 0 ? (
            <p className="text-center mt-10 font-semibold text-lg text-red-500">
               Not any bookings yet! To book select any package/destination from
               home page.
            </p>
         ) : (
            allbookings.map((myBooking) => (
               <div
                  key={myBooking._id}
                  className="bg-gray-100 mt-10 mx-16 p-6 rounded-md shadow-md font-semibold"
               >
                  <span className="text-lg lg:inline block text-start">
                     <i className="fas fa-map-marked-alt"></i> Destination:{" "}
                     {myBooking.destination}
                  </span>
                  <span className="lg:ml-6 lg:inline block text-start">
                     <i className="fas fa-igloo"></i> Package: 3 Days &bull; 2
                     Nights
                  </span>
                  <span className="lg:ml-6 lg:inline block text-start">
                     <i className="fas fa-phone-square"></i> Phone:{" "}
                     {myBooking.phone_number}
                  </span>
                  <span className="lg:ml-6 lg:inline block text-start">
                     <i className="fas fa-plane-departure"></i> Transport:{" "}
                     {myBooking.vehicles}
                  </span>
                  <button className="btn btn-success lg:float-right ml-4 lg:inline-block hidden">
                     Pay now
                  </button>
                  <div
                     className="tooltip lg:float-right lg:inline-block hidden"
                     data-tip={
                        myBooking.status === "Approved"
                           ? "You can't cancel this booking now."
                           : "Cancel and delete the order before approval"
                     }
                  >
                     <button
                        onClick={() => handleCancel(myBooking._id)}
                        className={
                           myBooking.status === "Approved"
                              ? "btn btn-disabled"
                              : `btn bg-red-600 hover:shadow-lg`
                        }
                     >
                        <i className="fas fa-info-circle mr-2 text-xl"></i>{" "}
                        Cancel Book
                     </button>
                  </div>
                  <br className="lg:inline hidden" />
                  <span className="lg:ml-6 lg:inline block text-start">
                     <i class="fas fa-calendar-alt"></i> Jouenry Date:{" "}
                     {myBooking.journeyDate}
                  </span>
                  <span className="lg:ml-6 lg:inline block text-start">
                     <i className="fas fa-clock"></i> Time:{" "}
                     {myBooking.journey_time}
                  </span>
                  <span className="lg:ml-6 mr-6 lg:inline block text-start">
                     <i class="fas fa-tag"></i> Price: MRP{" "}
                     <span className="font-bold">{myBooking.price}</span> /-
                  </span>
                  <span className="lg:ml-6 lg:inline block text-start">
                     Status:
                  </span>
                  <span
                     className={
                        myBooking.status === "Approved"
                           ? "bg-green-500 ml-2 px-2 py-1 rounded-md"
                           : "bg-yellow-500 ml-2 text-white px-2 py-1 rounded-md"
                     }
                  >
                     {" "}
                     {myBooking.status}
                  </span>

                  <button className="btn btn-success ml-4 block lg:hidden mb-3">
                     Pay now
                  </button>
                  <div
                     className="tooltip block lg:hidden text-start"
                     data-tip={
                        myBooking.status === "Approved"
                           ? "You can't cancel this booking now."
                           : "Cancel and delete the order before approval"
                     }
                  >
                     <button
                        onClick={() => handleCancel(myBooking._id)}
                        className={
                           myBooking.status === "Approved"
                              ? "btn btn-disabled"
                              : `btn bg-red-600 hover:shadow-lg`
                        }
                     >
                        <i className="fas fa-info-circle mr-2 text-xl"></i>{" "}
                        Cancel Book
                     </button>
                  </div>
               </div>
            ))
         )}
      </div>
   );
};

export default MyBookings;
