import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  //   const navigate = navigation();
  //   console.log(location);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (user && user?.email) {
    return children;
  }
  return <navigation state={location.pathname} to={"/login"}></navigation>;
};

export default PrivateRoute;
