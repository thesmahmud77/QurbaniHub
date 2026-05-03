import React from "react";
import Navbar from "../Components/Navbar";

const MyContainer = ({ children }) => {
  return (
    <div className="max-w-7xl min-h-screen mx-auto text-cent">
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default MyContainer;
