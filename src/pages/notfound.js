import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Notfound = () => {
   const navigate = useNavigate();
   document.title = "Page not found! - Crazy Traveler";

   return (
      <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
         <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
               <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                  <span className="sr-only">Error</span>404
               </h2>
               <p className="text-2xl font-semibold md:text-3xl">
                  Sorry, we couldn't find this page.
               </p>
               <p className="text-base my-3 font-semibold dark:text-gray-500">
                  This site is under development. <br /> Keep patient. It will
                  help us
               </p>
               <p className="mt-4 mb-8 dark:text-gray-400">
                  But dont worry, you can find plenty of other things on our
                  homepage. Or, go back to where you came from.
               </p>
               <button
                  className="px-8 mr-4 py-3 font-semibold rounded dark:bg-violet-800 dark:text-gray-100"
                  onClick={() => navigate(-1)}
               >
                  Go back
               </button>
               <Link
                  to="/"
                  className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
               >
                  Back to homepage
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Notfound;
