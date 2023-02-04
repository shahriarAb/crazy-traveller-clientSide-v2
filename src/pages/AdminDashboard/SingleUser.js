import React from "react";
import { toast, ToastContainer } from "react-toastify";

const SingleUser = ({ user, index, refetch }) => {
   const { email, displayName, role } = user;
   const makeAdmin = () => {
      fetch(`https://crazy-traveler-server.onrender.com/user/admin/${email}`, {
         method: "PUT",
         headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
         },
      })
         .then((res) => res.json())
         .then((data) => {
            refetch();
            toast.success("Admin added successfull!");
         });
   };

   const removeAdmin = () => {};

   const handleDeleteUser = (email) => {};

   return (
      <tr>
         <th>{index + 1}</th>
         <td>{displayName}</td>
         <td>{email}</td>
         <td>
            {role !== "admin" ? (
               <button
                  onClick={makeAdmin}
                  className="btn btn-sm btn-outline btn-info"
               >
                  Make Admin
               </button>
            ) : (
               <button onClick={removeAdmin} className="btn btn-sm btn-outline">
                  Remove Admin
               </button>
            )}
         </td>
         <td>
            <button
               onClick={() => handleDeleteUser(email)}
               className="btn bg-red-600 btn-sm"
            >
               Delete
            </button>
         </td>
         <ToastContainer />
      </tr>
   );
};

export default SingleUser;
