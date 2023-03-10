import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AdminDashboard() {
   const { signingOut } = useAuth();

   return (
      <div className="drawer drawer-mobile mb-40">
         <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
         />
         <div className="drawer-content flex flex-col my-4 text-left">
            <div className="flex">
               <label
                  htmlFor="dashboard-sidebar"
                  className="ml-3 lg:hidden cursor-pointer"
               >
                  <i className="fas fa-bars text-2xl mt-1"></i>
               </label>
               <h2 className="text-4xl font-bold text-red-800 ml-5">
                  Admin's Dashboard
               </h2>
            </div>
            <hr className="my-4" />
            <Outlet></Outlet>
         </div>
         <div className="drawer-side">
            <label
               htmlFor="dashboard-sidebar"
               className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
               <li className="my-1">
                  <Link to="/admin-dashboard">
                     <i className="fas fa-home text-xl"></i> Dashboard
                  </Link>
               </li>
               <li className="my-1">
                  <Link to="/admin-dashboard/manage-all-bookings">
                     <i className="fas fa-tools text-xl"></i> Manage All
                     Bookings
                  </Link>
               </li>
               <li className="my-1">
                  <Link to="/admin-dashboard/manage-destinations">
                     <i className="fas fa-hammer text-xl"></i> Manage
                     Destinations
                  </Link>
               </li>
               <li className="my-1">
                  <Link to="/admin-dashboard/add-services">
                     <i className="fas fa-plus-square text-xl"></i> Add a New
                     Destination
                  </Link>
               </li>
               <li className="my-1">
                  <Link to="/admin-dashboard/users">
                     <i className="fas fa-users text-xl"></i> Manage All Users
                  </Link>
               </li>
               <li>
                  <div className="mt-16 hover:bg-transparent ml-8">
                     <button
                        className="btn bg-white text-black hover:bg-black hover:text-white"
                        onClick={signingOut}
                     >
                        <i className="fas fa-sign-out-alt text-xl mr-4"></i>Log
                        out
                     </button>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   );
}
