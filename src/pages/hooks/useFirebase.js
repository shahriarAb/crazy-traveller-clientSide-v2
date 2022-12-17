import {
   GoogleAuthProvider,
   getAuth,
   signInWithPopup,
   onAuthStateChanged,
   signOut,
   createUserWithEmailAndPassword,
   updateProfile,
   signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.config";

initializeAuthentication();

const useFirebase = () => {
   const [user, setUser] = useState({});
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(true);
   const [token, setToken] = useState("");

   const googleProvider = new GoogleAuthProvider();
   const auth = getAuth();

   //register user with email and password
   const registerUser = (userName, email, password, navigate, from) => {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
         .then(() => {
            const newUser = { email, displayName: userName };
            setUser(newUser);
            //add user to database
            addUserToDB(userName, email);
            if (token) {
               navigate(from, { replace: true });
            }
            setError("");
            //send name of the new user to firebase
            updateProfile(auth.currentUser, {
               displayName: userName,
            })
               .then(() => {
                  setError("");
                  //profile updated
               })
               .catch((error) => {
                  setError(error.message);
               });
         })
         .catch((error) => {
            setError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   //login exisitng user
   const loginUser = (email, password, navigate, from) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
         .then(() => {
            if (token) {
               navigate(from, { replace: true });
            }
            setError("");
         })
         .catch((error) => {
            setError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   //google sign in
   const signInWithGoogle = (navigate, from) => {
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
         .then((result) => {
            const user = result.user;
            if (token) {
               navigate(from, { replace: true });
            }
            setError("");
            //add user to db
            addUserToDB(user.displayName, user.email);
         })
         .catch((error) => {
            setError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         } else {
            setUser({});
         }
         setIsLoading(false);
      });
      return unsubscribe;
   }, [auth]);

   const signingOut = () => {
      setIsLoading(true);
      signOut(auth)
         .then(() => {
            setUser({});
            localStorage.removeItem("accessToken");
         })
         .catch((error) => setError(error.message))
         .finally(() => setIsLoading(false));
   };

   // add all user to database
   const addUserToDB = (displayName, email) => {
      const user = { displayName, email };
      fetch(`http://localhost:5500/user/${email}`, {
         method: "PUT",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(user),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            const accessToken = data.token;
            localStorage.setItem("accessToken", accessToken);
            setToken(accessToken);
         });
   };

   return {
      user,
      error,
      registerUser,
      setError,
      signInWithGoogle,
      loginUser,
      signingOut,
      isLoading,
   };
};

export default useFirebase;
