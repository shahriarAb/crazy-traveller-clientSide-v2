import React from "react";
import "./newsletter.css";

const Newsletter = () => {
   return (
      <div className="container my-24 mx-auto">
         <section className="mb-32 text-gray-800 background-radial-gradient">
            <div className="px-6 py-12 md:px-12 text-center lg:text-left">
               <div className="container mx-auto xl:px-32">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                     <div className="mt-12 lg:mt-0">
                        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 st1">
                           Do not miss <br />
                           <span className="st2">any updates</span>
                        </h1>
                        <p className="st3 mb-4 opacity-70 lead">
                           We will write rarely and only high-quality content.
                        </p>
                     </div>
                     <div className="mb-12 lg:mb-0">
                        <div className="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
                           <h2 className="text-3xl font-bold mb-12">
                              Subscribe to the newsletter
                           </h2>
                           <form>
                              <div className="form-group mb-6">
                                 <input
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleInput90"
                                    placeholder="Name"
                                 />
                              </div>
                              <div className="form-group mb-6">
                                 <input
                                    type="email"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleInput91"
                                    placeholder="Email address"
                                 />
                              </div>
                              <div className="form-group form-check text-center mb-6">
                                 <input
                                    type="checkbox"
                                    className="checkbox form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-md bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                                    id="exampleCheck96"
                                 />
                                 <label
                                    className="form-check-label inline-block text-gray-800"
                                    htmlFor="exampleCheck96"
                                 >
                                    I have read and agree to the terms
                                 </label>
                              </div>
                              <button
                                 type="submit"
                                 className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                 data-mdb-ripple="true"
                                 data-mdb-ripple-color="light"
                              >
                                 Subscribe
                              </button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Newsletter;
