import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import SingleUser from "./SingleUser";

const Users = () => {
   const {
      data: users,
      isLoading,
      refetch,
   } = useQuery("users", () =>
      fetch("https://crazy-traveler-server.onrender.com/users", {
         method: "GET",
         headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
         },
      }).then((res) => res.json())
   );

   if (isLoading) {
      return <Loading></Loading>;
   }

   return (
      <div>
         <h2 className="my-4 text-lg text-red-500 font-semibold">
            All users list:
         </h2>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th></th>
                     <th>User Name</th>
                     <th>Email Address</th>
                     <th>Handle Role</th>
                     <th>Delete User</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user, index) => (
                     <SingleUser
                        key={user._id}
                        user={user}
                        index={index}
                        refetch={refetch}
                     ></SingleUser>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Users;
