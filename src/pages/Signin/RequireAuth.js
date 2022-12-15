import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../Shared/Loading";

const RequireAuth = ({ children }) => {
   const { user, isLoading } = useAuth();
   const location = useLocation();

   if (isLoading) {
      return <Loading></Loading>;
   }

   if (!user.email) {
      return (
         <Navigate to="/signin" state={{ from: location }} replace></Navigate>
      );
   }

   return children;
};

export default RequireAuth;
