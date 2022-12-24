import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Booknow.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booknow = () => {
   const { id } = useParams();
   const { user } = useAuth();
   const [destination, setDestination] = useState({});

   const price = destination.price;

   useEffect(() => {
      const uri = `http://localhost:5500/destination/${id}`;
      fetch(uri)
         .then((res) => res.json())
         .then((data) => setDestination(data));
   }, [id]);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      data.status = "Pending";
      data.price = price;
      fetch("http://localhost:5500/bookings", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((result) => {
            if (result.insertedId) {
               toast.success("Booking Successfully Done.", {
                  position: "top-center",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  progress: undefined,
                  theme: "light",
               });
            }
         });
   };

   return (
      <div className="m-6 lg:grid lg:grid-cols-2 gap-8">
         <div className="lg:w-full border-4 rounded-xl border-red-200 border-opacity-100">
            <img className="w-full rounded-md" src={destination.img} alt="" />
            <div className="mt-4 flex justify-between">
               <div className="ml-6 text-gray-600 uppercase text-lg font-semibold tracking-wider">
                  3 days &bull; 2 nights
               </div>
               <div className="mr-6 font-bold text-lg bg-red-400 rounded-full px-2">
                  BDT {destination.price}/-
               </div>
            </div>
            <h2 className="my-4 text-3xl font-bold text-red-500 text-center">
               {destination.name}
            </h2>
            <article className="px-4 text-center text-gray-600">
               {destination.description}
            </article>
            <div className="my-6 flex justify-center">
               <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 py-2 px-8 rounded-lg shadow-md my-2 mr-6">
                  <i className="fas fa-star-half-alt"></i>
                  <Link to="/post-review">Rate this Service</Link>
               </button>
               <button className="border-2 border-red-500 bg-red-500 text-white hover:bg-red-50 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 py-2 px-8 rounded-lg shadow-md my-2 ml-6">
                  <Link to="/">Home</Link>
               </button>
            </div>
         </div>

         <div className="shipment-container">
            <div className="">
               <h2 className="text-center mb-4 font-semibold text-2xl text-red-400">
                  Fill this form to confirm your booking
               </h2>
               <form
                  className="shipping-form"
                  onSubmit={handleSubmit(onSubmit)}
               >
                  <input
                     defaultValue={user.displayName}
                     {...register("name")}
                  />
                  <input defaultValue={user.email} {...register("email")} />
                  <input
                     readOnly
                     defaultValue={destination.name}
                     {...register("destination", { required: true })}
                  />
                  {errors.destination && (
                     <span className="error">Confirm this destination?</span>
                  )}
                  <input
                     placeholder="Phone Number"
                     {...register("phone_number", { required: true })}
                  />
                  {errors.phone_number && (
                     <span className="error">This field is required</span>
                  )}
                  <input
                     placeholder="Journey Date"
                     type="date"
                     {...register("journeyDate", { required: true })}
                  />
                  {errors.journeyDate && (
                     <span className="error">This field is required</span>
                  )}
                  {/* <input
                     readOnly
                     title="Price. Can't be changed!"
                     defaultValue={destination.price}
                     {...register("price", { required: true })}
                  />
                  {errors.price && (
                     <span className="error">
                        This will be your total cost.
                     </span>
                  )} */}
                  <br />
                  <select
                     className="vehicles"
                     {...register("vehicles", { required: true })}
                  >
                     <option value="">Vehicles Options</option>
                     <option value="Air">Air</option>
                     <option value="AC Bus">AC Bus</option>
                     <option value="Non AC Bus">Non AC BUS</option>
                     <option value="Train">Train</option>
                  </select>
                  {errors.vehicles && (
                     <span className="error">This field is required</span>
                  )}
                  <br />
                  <select
                     className="vehicles"
                     {...register("journey_time", { required: true })}
                  >
                     <option value="">Journey Time</option>
                     <option value="Day">Day</option>
                     <option value="Night">Night</option>
                  </select>
                  {errors.journey_time && (
                     <span className="error">This field is required</span>
                  )}
                  <input
                     className="border-2 border-red-500 hover:bg-red-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 py-2 px-8 rounded-lg text-black shadow-md my-2 mr-6 cursor-pointer"
                     type="Submit"
                  />
               </form>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default Booknow;
