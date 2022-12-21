import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import Footer from "./pages/Shared/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import AuthProvider from "./pages/Context/AuthProvider";
import Signin from "./pages/Signin/Signin";
import RequireAuth from "./pages/Signin/RequireAuth";
import Booknow from "./pages/Booknow/Booknow";
import MyBookings from "./pages/MyBookings/MyBookings";
import { useLayoutEffect } from "react";
import Signup from "./pages/Signup/Signup";
import Notfound from "./pages/notfound";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import DashIndex from "./pages/AdminDashboard/DashIndex";
import ManageBookings from "./pages/AdminDashboard/ManageBookings";
import AddServices from "./pages/AdminDashboard/AddServices";
import ManageDestinations from "./pages/AdminDashboard/ManageDestinations";
import Users from "./pages/AdminDashboard/Users";
import RequireAdmin from "./pages/Signin/RequireAdmin";
import PostReview from "./pages/PostReview/PostReview";

function App() {
   const Wrapper = ({ children }) => {
      const location = useLocation();

      useLayoutEffect(() => {
         document.documentElement.scrollTo(0, 0);
      }, [location.pathname]);
      return children;
   };

   return (
      <div className="App text-center">
         <Wrapper>
            <AuthProvider>
               <Header></Header>
               <Routes>
                  <Route path="/" element={<Home></Home>}></Route>
                  <Route path="/home" element={<Home></Home>}></Route>
                  <Route
                     path="/destination/:id"
                     element={
                        <RequireAuth>
                           <Booknow></Booknow>
                        </RequireAuth>
                     }
                  ></Route>
                  <Route
                     path="/mybookings"
                     element={
                        <RequireAuth>
                           <MyBookings></MyBookings>
                        </RequireAuth>
                     }
                  ></Route>
                  <Route
                     path="/post-review"
                     element={
                        <RequireAuth>
                           <PostReview></PostReview>
                        </RequireAuth>
                     }
                  ></Route>
                  <Route
                     path="/admin-dashboard"
                     element={
                        <RequireAdmin>
                           <AdminDashboard></AdminDashboard>
                        </RequireAdmin>
                     }
                  >
                     <Route index element={<DashIndex></DashIndex>}></Route>
                     <Route
                        path="manage-all-bookings"
                        element={<ManageBookings></ManageBookings>}
                     ></Route>
                     <Route
                        path="manage-destinations"
                        element={<ManageDestinations></ManageDestinations>}
                     ></Route>
                     <Route
                        path="add-services"
                        element={<AddServices></AddServices>}
                     ></Route>
                     <Route path="users" element={<Users></Users>}></Route>
                  </Route>
                  <Route path="/signin" element={<Signin></Signin>}></Route>
                  <Route
                     path="/create-account"
                     element={<Signup></Signup>}
                  ></Route>
                  <Route path="*" element={<Notfound></Notfound>}></Route>
               </Routes>
               <Footer></Footer>
            </AuthProvider>
         </Wrapper>
      </div>
   );
}

export default App;
