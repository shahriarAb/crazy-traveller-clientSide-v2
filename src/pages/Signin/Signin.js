import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../Shared/Loading";
import "./Signin.css";

const Signin = () => {
   const { signInWithGoogle, error, isLoading, loginUser } = useAuth();
   const [showPass, setShowPass] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   const { register, handleSubmit } = useForm();

   const handleGoogleSignIn = () => {
      signInWithGoogle(navigate, from);
   };

   const toggle = () => {
      setShowPass(!showPass);
   };

   const onSubmit = async (data) => {
      await loginUser(data.email, data.password, navigate, from);
   };

   if (isLoading) {
      <Loading></Loading>;
   }

   return (
      <>
         <div className="signup-form mt-28">
            <div className="form-border">
               <h4 className="text-2xl font-bold mb-2">Sign in</h4>
               <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
                  <input
                     className="input-box placeholder-blue-300"
                     type="text"
                     placeholder="Email Address"
                     {...register("email")}
                  />
                  <div className="relative flex items-center">
                     <input
                        className="input-box placeholder-blue-300"
                        type={showPass === false ? "password" : "text"}
                        placeholder="Password"
                        {...register("password")}
                     />
                     <div className="absolute right-1 text-xl cursor-pointer">
                        {showPass === false ? (
                           <i class="fas fa-eye" onClick={toggle}></i>
                        ) : (
                           <i class="fas fa-eye-slash" onClick={toggle}></i>
                        )}
                     </div>
                  </div>
                  <div className="flex justify-start mt-3 ml-1">
                     <input className="mt-1" type="checkbox" id="remember" />
                     <label className="ml-1" htmlFor="remember">
                        Remember me
                     </label>
                  </div>
                  <span className="text-red-600">{error}</span>
                  <input
                     className="input-box bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 py-2 px-6 rounded-md text-white font-medium shadow-md mt-6 cursor-pointer"
                     type="submit"
                     value="Login"
                  />
               </form>
               <p>
                  Dont't have an account?{" "}
                  <Link
                     to="/create-account"
                     className="text-start text-blue-600 visited:text-purple-400"
                  >
                     Create an account
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

export default Signin;
