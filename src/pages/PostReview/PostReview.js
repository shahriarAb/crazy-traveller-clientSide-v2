import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../hooks/useAuth";

const PostReview = () => {
   const { register, handleSubmit, reset } = useForm();
   const { user } = useAuth();
   const [ratingValue, setRatingValue] = useState(0);

   console.log(ratingValue);

   const onSubmit = (data) => {
      fetch("http://localhost:5500/reviews", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.insertedId) {
               toast.success("Review posted. Thanks for your feedback.", {
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
      <div className="add-service mt-20 mb-60">
         <h2 className="my-6 text-center text-red-700 text-3xl lg:mt-16 font-bold">
            Post a review on Crazy Traveller
         </h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
               {...register("name", { required: true, maxLength: 20 })}
               placeholder="Destination Name"
               defaultValue={user.displayName}
               disabled
            />
            <textarea
               {...register("description")}
               placeholder="Write your thoughts here"
               rows={10}
            />
            {/* star rating */}
            <div className="flex my-5">
               <p className="font-semibold text-lg">Rate us with star:</p>
               <div className="rating w-40">
                  <input
                     type="radio"
                     name="rating-2"
                     className="mask mask-star-2 bg-orange-400"
                     onClick={() => setRatingValue(1)}
                  />
                  <input
                     type="radio"
                     name="rating-2"
                     className="mask mask-star-2 bg-orange-400"
                     onClick={() => setRatingValue(2)}
                  />
                  <input
                     type="radio"
                     name="rating-2"
                     className="mask mask-star-2 bg-orange-400"
                     onClick={() => setRatingValue(3)}
                  />
                  <input
                     type="radio"
                     name="rating-2"
                     className="mask mask-star-2 bg-orange-400"
                     onClick={() => setRatingValue(4)}
                  />
                  <input
                     type="radio"
                     name="rating-2"
                     className="mask mask-star-2 bg-orange-400"
                     onClick={() => setRatingValue(5)}
                  />
               </div>
            </div>

            <input className="btn btn-primary font-bold" type="submit" />
         </form>
         <ToastContainer />
      </div>
   );
};

export default PostReview;
