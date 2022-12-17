import React from "react";

const SingleUser = ({ user, index }) => {
   const { email, displayName } = user;
   return (
      <tr>
         <th>{index + 1}</th>
         <td>{displayName}</td>
         <td>{email}</td>
         <td>
            <button className="btn btn-sm btn-outline btn-info">
               Make Admin
            </button>
         </td>
         <td>
            <button className="btn bg-red-600 btn-sm">Delete</button>
         </td>
      </tr>
   );
};

export default SingleUser;
