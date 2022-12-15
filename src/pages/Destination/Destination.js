import React from "react";
import { useNavigate } from "react-router-dom";

const Destination = ({ destination }) => {
   const { _id, name, description, img, price } = destination;

   const navigate = useNavigate();
   const handleDetails = () => {
      const url = `/destination/${_id}`;
      navigate(url);
   };

   return (
      <div>
         <div className="wrapper bg-gray-100 rounded-md shadow-md antialiased text-gray-900 p-2 mb-4">
            <div>
               <img
                  src={img}
                  alt=" random imgee"
                  className="w-full h-72 object-cover object-center rounded-lg shadow-md"
               />

               <div className="relative px-4 -mt-16  ">
                  <div className="bg-white px-6 pt-4 pb-2 rounded-lg shadow-lg">
                     <div className="flex items-baseline">
                        <span className="bg-indigo-300 text-indigo-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
                           New
                        </span>
                        <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                           3 days &bull; 2 nights
                        </div>
                        <small className="ml-3 text-gray-600 font-bold bg-red-200 rounded-full px-1">
                           BDT {price}/-
                        </small>
                     </div>
                     <h4 className="mt-1 text-2xl font-bold uppercase leading-tight truncate">
                        {name}
                     </h4>
                     <div>
                        <small className="text-gray-600">
                           {description.slice(0, 125)}...
                        </small>
                     </div>
                     <button
                        onClick={handleDetails}
                        className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-600 hover:to-red-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 py-2 px-8 rounded-lg text-white shadow-md my-2"
                     >
                        Book Now
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Destination;
