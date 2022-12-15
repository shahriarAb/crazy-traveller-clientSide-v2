import React, { useEffect, useState } from "react";
import Destination from "../../Destination/Destination";
import Loading from "../../Shared/Loading";

const Destinations = () => {
   const [destinations, setDestinations] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      setIsLoading(true);
      fetch("http://localhost:5500/destinations")
         .then((res) => res.json())
         .then((data) => {
            setDestinations(data);
            setIsLoading(false);
         });
   }, []);

   if (isLoading) {
      return <Loading></Loading>;
   }
   return (
      <div className="text-center mt-40 lg:px-20">
         <h4
            style={{ fontFamily: "Dancing Script, cursive" }}
            className="text-xl font-semibold text-red-400"
         >
            Popular Destinations with Exclusive Prize
         </h4>
         <h2 className="text-4xl font-extrabold">TOP NOTCH DESTINATIONS</h2>
         <div className="mt-8 lg:mx-8 lg:grid lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
               <Destination
                  key={destination._id}
                  destination={destination}
               ></Destination>
            ))}
         </div>
      </div>
   );
};

export default Destinations;
