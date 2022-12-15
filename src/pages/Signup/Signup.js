import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../Shared/Loading";

const Signup = () => {
   const { signInWithGoogle, error, registerUser, isLoading } = useAuth();
   const [showPass, setShowPass] = useState(false);
   const [showConfirmPass, setShowConfirmPass] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   const {
      register,
      getValues,
      formState: { errors },
      handleSubmit,
   } = useForm();

   const handleGoogleSignIn = () => {
      signInWithGoogle(navigate, from);
   };

   const toggle = () => {
      setShowPass(!showPass);
   };

   const toggleConfirm = () => {
      setShowConfirmPass(!showConfirmPass);
   };

   const onSubmit = async (data) => {
      await registerUser(data.name, data.email, data.password, navigate, from);
   };

   if (isLoading) {
      return <Loading></Loading>;
   }

   return (
      <>
         <div className="signup-form mt-28">
            <div className="form-border">
               <h4 className="text-2xl font-bold mb-2">Create Account</h4>
               <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
                  <input
                     className="input-box placeholder-blue-300"
                     type="text"
                     placeholder="Your Full Name"
                     {...register("name", {
                        required: {
                           value: true,
                           message: "Full name field is required.",
                        },
                     })}
                  />
                  <label className="label">
                     {errors.name?.type === "required" && (
                        <span className="label-text-alt text-red-500 font-semibold text-base">
                           {errors.name.message}
                        </span>
                     )}
                     {errors.name?.type === "pattern" && (
                        <span className="label-text-alt text-red-500 font-semibold text-base">
                           {errors.name.message}
                        </span>
                     )}
                  </label>

                  <input
                     className="input-box placeholder-blue-300"
                     type="text"
                     placeholder="Email Address"
                     {...register("email", {
                        required: {
                           value: true,
                           message: "Email Address field is required.",
                        },
                     })}
                  />
                  <label className="label">
                     {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-500 font-semibold text-base">
                           {errors.email.message}
                        </span>
                     )}
                     {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-500 font-semibold text-base">
                           {errors.email.message}
                        </span>
                     )}
                  </label>

                  <div className="relative flex items-center">
                     <input
                        className="input-box placeholder-blue-300"
                        type={showPass === false ? "password" : "text"}
                        placeholder="Password"
                        {...register("password", {
                           required: {
                              value: true,
                              message: "Password field is required.",
                           },
                        })}
                     />
                     <div className="absolute right-1 text-xl cursor-pointer">
                        {showPass === false ? (
                           <i class="fas fa-eye" onClick={toggle}></i>
                        ) : (
                           <i class="fas fa-eye-slash" onClick={toggle}></i>
                        )}
                     </div>
                  </div>
                  <label className="label">
                     {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-500 font-semibold text-base">
                           {errors.password.message}
                        </span>
                     )}
                  </label>

                  <div className="relative flex items-center">
                     <input
                        className="input-box placeholder-blue-300"
                        type={showConfirmPass === false ? "password" : "text"}
                        placeholder="Confirm Password"
                        {...register("confirmpassword", {
                           required: {
                              value: true,
                              message: "Confirm password field is required.",
                           },
                           validate: (value) =>
                              value === getValues("password") ||
                              "Both password must matched!",
                        })}
                     />
                     <div className="absolute right-1 text-xl cursor-pointer">
                        {showConfirmPass === false ? (
                           <i class="fas fa-eye" onClick={toggleConfirm}></i>
                        ) : (
                           <i
                              class="fas fa-eye-slash"
                              onClick={toggleConfirm}
                           ></i>
                        )}
                     </div>
                  </div>
                  <label className="label">
                     {errors.confirmpassword?.type === "required" && (
                        <span className="label-text-alt text-red-500 font-semibold text-base">
                           {errors.confirmpassword.message}
                        </span>
                     )}
                     {errors.confirmpassword?.type === "validate" && (
                        <span className="label-text-alt text-red-500 font-semibold text-base">
                           {errors.confirmpassword.message}
                        </span>
                     )}
                  </label>
                  <span className="text-red-600">{error}</span>
                  <input
                     className="input-box bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-6 rounded-md text-white font-medium shadow-md mt-6 cursor-pointer"
                     type="submit"
                     value="Login"
                  />
               </form>
               <p>
                  Already have an account?{" "}
                  <Link
                     to="/signin"
                     className="text-start text-blue-600 visited:text-purple-400"
                  >
                     Login
                  </Link>
               </p>
            </div>
         </div>
         <div>
            <div className="flex justify-center">
               <h6 className="font-semibold text-lg py-2">or</h6>
            </div>
            <div className="text-center mb-40">
               <button
                  onClick={handleGoogleSignIn}
                  className="border-2 border-yellow-400 hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50 py-1 px-16 rounded-full text-yellow-400 font-semibold shadow-md text-lg"
               >
                  <i className="fab fa-google"></i> Continue with Google
               </button>
               <br />
               <button className="border-2 border-blue-400 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-1 px-14 rounded-full text-blue-400 font-semibold shadow-md text-lg mt-4">
                  <i class="fab fa-facebook-f"></i> Continue with Facebook
               </button>
            </div>
         </div>
      </>
   );
};

export default Signup;
