import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loading from "../Shared/Loading";

const RequireAdmin = ({ children }) => {
   const { user, signingOut, isLoading } = useAuth();
   const location = useLocation();
   const [admin, adminLoading] = useAdmin(user);

   if (isLoading || adminLoading) {
      return <Loading></Loading>;
   }

   if (!user.email || !admin) {
      signingOut();
      return (
         <Navigate to="/signin" state={{ from: location }} replace></Navigate>
      );
   }
   return children;
};

export default RequireAdmin;
