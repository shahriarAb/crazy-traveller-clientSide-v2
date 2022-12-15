import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AdminDashboard() {
   const { signingOut } = useAuth();

   return (
      <div className="drawer drawer-mobile">
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
                  <i class="fas fa-bars text-2xl mt-1"></i>
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
                     <i class="fas fa-home text-xl"></i> Dashboard Home
                  </Link>
               </li>
               <li className="my-1">
                  <Link to="/admin-dashboard/manage-all-bookings">
                     <i class="fas fa-tools text-xl"></i> Manage All Bookings
                  </Link>
               </li>
               <li className="my-1">
                  <Link to="/admin-dashboard/add-services">
                     <i class="fas fa-plus-square text-xl"></i> Add a New
                     Destination
                  </Link>
               </li>
               <li className="my-1">
                  <Link to="/admin-dashboard/make-admin">
                     <i class="fas fa-user-cog text-xl"></i> Make Someone Admin
                  </Link>
               </li>
               <li>
                  <div className="mt-16 hover:bg-transparent ml-8">
                     <button
                        className="btn bg-white text-black hover:bg-black hover:text-white"
                        onClick={signingOut}
                     >
                        <i class="fas fa-sign-out-alt text-xl mr-4"></i>Log out
                     </button>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   );
}
