import React from "react";

const Footer = () => {
   return (
      <footer className="footer bottom-0 absolute footer-center p-10 bg-gray-900 text-gray-200 rounded-t-xl">
         <p className="italic">
            We are always worried about your safety and your sound travel.
            Ensure we give you the best.
         </p>
         <div className="grid grid-flow-col gap-4">
            <a className="block hover:underline" href="www">
               About Us
            </a>
            <a className="block hover:underline" href="www">
               Terms & Conditions
            </a>
            <a className="block hover:underline" href="www">
               Privacy Policy
            </a>
            <a className="block hover:underline" href="www">
               Travel Guide
            </a>
            <a className="block hover:underline" href="www">
               Contact Us
            </a>
            <a className="block hover:underline" href="www">
               Improve us
            </a>
         </div>
         <div>
            <p>Support us on social media</p>
            <div className="grid grid-flow-col gap-4 mt-1">
               <a href="www.example.com">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="fill-current hover:scale-150 transition-all duration-500"
                  >
                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
               </a>
               <a href="www.example.com">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="fill-current hover:scale-150 transition-all duration-500"
                  >
                     <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
               </a>
               <a href="www.example.com">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     className="fill-current hover:scale-150 transition-all duration-500"
                  >
                     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
               </a>
               <a href="www.example.com">
                  <svg
                     width="24px"
                     height="24px"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"
                     className="fill-current hover:scale-150 transition-all duration-500"
                  >
                     <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                           fillRule="nonzero"
                           d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                        />
                     </g>
                  </svg>
               </a>
               <a href="www.example.com">
                  <svg
                     width="20px"
                     height="20px"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                     className="fill-current hover:scale-150 transition-all duration-500"
                  >
                     <path d="M1 6h4v13H1V6zm2-5C1.8 1 1 2 1 3.1 1 4.1 1.8 5 3 5c1.3 0 2-.9 2-2s-.8-2-2-2zm11.6 5.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z" />
                  </svg>
               </a>
            </div>
         </div>
         <div>
            <small>
               @ any need: +880-1939-632964, 010-1234567, +880-12224-56789
            </small>
            <p>
               Copyright &copy; {new Date().getFullYear()} - All right reserved
               by Crazy Traveler Dot Net. Presented by shahriarAb.
            </p>
         </div>
      </footer>
   );
};

export default Footer;
