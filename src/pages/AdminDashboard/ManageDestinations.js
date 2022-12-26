import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageDestinations = () => {
   const [destinations, setDestinations] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch("http://localhost:5500/destinations");
         const data = await res.json();
         setDestinations(data);
         setIsLoading(false);
      };
      fetchData();
   }, []);

   const handleDelete = (id) => {
      const deleteConfirm = window.confirm(
         "Are you sure want to delete this destination?"
      );
      if (deleteConfirm) {
         const url = `http://localhost:5500/destination/${id}`;
         fetch(url, {
            method: "DELETE",
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount) {
                  toast.error("Successfully deleted the destination.", {
                     position: "top-center",
                     autoClose: 4000,
                     hideProgressBar: false,
                     closeOnClick: true,
                     progress: undefined,
                     theme: "light",
                  });
                  const remainingDestinations = destinations.filter(
                     (dest) => dest._id !== id
                  );
                  setDestinations(remainingDestinations);
               }
            });
      }
   };

   if (isLoading) {
      return <Loading></Loading>;
   }

   return (
      <div className="mt-20">
         <h2 className="text-4xl font-extrabold lg:mx-0 mx-5">
            All destinations packages:
         </h2>
         <div className="mt-8 lg:mx-8 mx-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-3 gap-5">
            {destinations.map((destination) => (
               <div className="card bg-base-100 shadow-xl image-full">
                  <figure>
                     <img src={destination.img} alt="destination" />
                  </figure>
                  <div className="card-body">
                     <h2 className="card-title">{destination.name}</h2>
                     <div className="text-gray-100 uppercase text-xs font-semibold tracking-wider">
                        Package type: 3 days &bull; 2 nights
                     </div>
                     <p>Price: {destination.price}</p>
                     <div className="card-actions justify-end">
                        <button
                           onClick={() => handleDelete(destination._id)}
                           className="btn btn-sm btn-error"
                        >
                           Delete
                        </button>
                        <button className="btn btn-sm btn-primary">Edit</button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
         <ToastContainer />
      </div>
   );
};

export default ManageDestinations;
