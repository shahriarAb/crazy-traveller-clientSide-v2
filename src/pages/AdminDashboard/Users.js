import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading";
import SingleUser from "./SingleUser";

const Users = () => {
   const [users, setUsers] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch("http://localhost:5500/users", {
            method: "GET",
            headers: {
               authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
         });
         const data = await res.json();
         setUsers(data);
         setIsLoading(false);
      };
      fetchData();
   }, []);

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
                     <th>Make Someone Admin</th>
                     <th>Delete User</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user, index) => (
                     <SingleUser
                        key={user._id}
                        user={user}
                        index={index}
                     ></SingleUser>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Users;
