import React from "react";
import { useForm } from "react-hook-form";
import "./AddServices.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddServices = () => {
   const { register, handleSubmit, reset } = useForm();

   const onSubmit = (data) => {
      fetch("http://localhost:5500/destinations", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               toast.success("Successfully added.", {
                  position: "top-center",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  progress: undefined,
                  theme: "light",
               });
               reset();
            }
         });
   };

   return (
      <div className="add-service">
         <h2 className="my-6 text-center text-red-700 text-3xl lg:mt-16 font-bold">
            Add New Destinations
         </h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               {...register("name", { required: true, maxLength: 25 })}
               placeholder="Destination Name"
            />
            <textarea {...register("description")} placeholder="Description" />
            <input type="number" {...register("price")} placeholder="Price" />
            <input {...register("img")} placeholder="Image URL" />
            <input className="btn btn-warning font-bold" type="submit" />
         </form>
         <ToastContainer />
      </div>
   );
};

export default AddServices;
