import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAdmin from "../../hooks/useAdmin";

const Header = () => {
   const { user, signingOut, error } = useAuth();
   const [navbarScroll, setNavbarScroll] = useState(false);
   const [admin] = useAdmin(user);

   useEffect(() => {
      if (user.email) {
         toast.success("Login Successfull.", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
         });
      }
   }, [user.email]);

   useEffect(() => {
      if (error) {
         toast.error("Login Failed!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
         });
      }
   }, [error]);

   const signOut = () => {
      toast.warning("Logged out!", {
         position: "top-right",
         autoClose: 4000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
         delay: 1000,
      });
   };

   const activeStyle = {
      fontWeight: "bold",
      borderBottom: "2px solid rgb(168, 168, 168)",
   };

   const changeBackground = () => {
      if (window.scrollY >= 250) {
         setNavbarScroll(true);
      } else {
         setNavbarScroll(false);
      }
   };

   window.addEventListener("scroll", changeBackground);

   return (
      <div
         className={`navbar sticky top-0 z-50 transition-all duration-700 ${
            navbarScroll ? "bg-gray-900 " : "bg-black"
         }`}
      >
         <div className="navbar-start">
            {/* drop down for responsive */}
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5 text-white"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </label>
               <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
               >
                  <li>
                     <NavLink
                        className="hover:border-b-2 text-black p-2 mx-2 hover:text-gray-400 rounded-lg"
                        to="/home"
                        style={({ isActive }) =>
                           isActive ? activeStyle : undefined
                        }
                     >
                        Home
                     </NavLink>
                  </li>
                  {user.email && admin && (
                     <li>
                        <NavLink
                           className="hover:border-b-2 text-black p-2 mx-2 hover:text-gray-400 rounded-lg"
                           to="/admin-dashboard"
                           style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                           }
                        >
                           Admin Dashboard
                        </NavLink>
                     </li>
                  )}
                  {user.email && (
                     <li>
                        <NavLink
                           className="hover:border-b-2 text-black p-2 mx-2 hover:text-gray-600 rounded-lg"
                           to="/mybookings"
                           style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                           }
                        >
                           My Bookings
                        </NavLink>
                     </li>
                  )}
                  {user.email && (
                     <li>
                        <NavLink
                           className="hover:border-b-2 text-black p-2 mx-2 hover:text-gray-600 rounded-lg"
                           to="/post-review"
                           style={({ isActive }) =>
                              isActive ? activeStyle : undefined
                           }
                        >
                           Post A Review
                        </NavLink>
                     </li>
                  )}
               </ul>
            </div>

            <Link to="/" className="flex items-center lg:ml-16">
               <div className="text-5xl text-blue-300">
                  <img width="65px" src={logo} alt="logopic" />
               </div>
               <div>
                  <h2 className="lg:text-3xl text-xl font-bold lg:ml-4 text-gray-300">
                     Crazy Traveler
                  </h2>
                  <small className="ml-14 font-semibold text-gray-300 lg:inline hidden">
                     Your travel director
                  </small>
               </div>
            </Link>
         </div>

         {/* for large or medium screen */}
         <div className="navbar-end lg:flex">
            <ul className="flex p-0">
               <li>
                  <NavLink
                     className="lg:inline hidden hover:border-b-2 text-gray-200 p-2 mx-3 hover:text-gray-400 rounded-lg"
                     to="/home"
                     style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                     }
                  >
                     Home
                  </NavLink>
               </li>
               {user.email && admin && (
                  <li>
                     <NavLink
                        className="lg:inline hidden hover:border-b-2 text-gray-200 p-2 mx-3 hover:text-gray-400 rounded-lg"
                        to="/admin-dashboard"
                        style={({ isActive }) =>
                           isActive ? activeStyle : undefined
                        }
                     >
                        Admin Dashboard
                     </NavLink>
                  </li>
               )}
               {user.email && (
                  <li>
                     <NavLink
                        className="lg:inline hidden hover:border-b-2 text-gray-200 p-2 mx-2 hover:text-gray-400 rounded-lg"
                        to="/mybookings"
                        style={({ isActive }) =>
                           isActive ? activeStyle : undefined
                        }
                     >
                        My Bookings
                     </NavLink>
                  </li>
               )}
               {user.email && (
                  <li>
                     <NavLink
                        className="lg:inline hidden hover:border-b-2 text-gray-200 p-2 mx-2 hover:text-gray-400 rounded-lg"
                        to="/post-review"
                        style={({ isActive }) =>
                           isActive ? activeStyle : undefined
                        }
                     >
                        Post A Review
                     </NavLink>
                  </li>
               )}
            </ul>

            {user.email ? (
               <div className="dropdown dropdown-end lg:mr-14 mr-4 lg:ml-6">
                  <label
                     tabIndex={0}
                     className="btn btn-ghost btn-circle avatar"
                  >
                     <div className="w-10 rounded-full">
                        {user.photoURL ? (
                           <img src={user.photoURL} alt="prpfileimg" />
                        ) : (
                           <i className="text-white text-3xl mt-1 fas fa-user-circle"></i>
                        )}
                     </div>
                  </label>
                  <ul
                     tabIndex={0}
                     className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                     <li>
                        <a href="www" className="justify-between">
                           Profile
                           <span className="badge">
                              {user.displayName.split(" ")[0]}
                           </span>
                        </a>
                     </li>
                     <li>
                        <a href="www">Settings</a>
                     </li>
                     <li>
                        <button
                           onClick={() => {
                              signingOut();
                              signOut();
                           }}
                        >
                           Logout
                        </button>
                     </li>
                  </ul>
               </div>
            ) : (
               <NavLink
                  className=" text-white border-2 border-gray-400 py-1 px-4 hover:text-gray-200 rounded-xl lg:mr-12 mr-4"
                  to="/signin"
               >
                  Sign in
               </NavLink>
            )}
         </div>
         <ToastContainer />
      </div>
   );
};

export default Header;
