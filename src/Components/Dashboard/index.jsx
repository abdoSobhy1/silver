import { getAuth, onAuthStateChanged } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { useEffect, useState } from "react";

import Home from "./Home";
import Login from "./Login";

const DashBoard = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return <div>{user ? <Home /> : <Login />}</div>;
};

export default DashBoard;
