import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader/Loader";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    // console.log(localStorage.getItem("token"), "token in authcontext");
    setCurrentUser(localStorage.getItem("token"));
    setTimeout(() => {
      setPending(false);
    }, 1000);
  }, [currentUser]);

  if (pending) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
