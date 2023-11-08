import { createContext } from "react";

import axios from "axios";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignInEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const userUpdateProfile = async (name, photo) => {
    return await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const userLogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // const userEmail = currentUser.email || user.email
      // const loggedUser = {email:userEmail}

      setLoading(false);
      setUser(currentUser);

      if (currentUser) {
        axios
          .post(
            "https://child-co-server.vercel.app/jwt",
            { email: currentUser.email },
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios
          .get(
            "https://child-co-server.vercel.app/logout",

            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
          });
      }
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    userSignInEmail,
    userSignGoogle,
    userLogOut,
    userUpdateProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
