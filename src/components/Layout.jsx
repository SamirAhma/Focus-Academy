import React from "react";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <div className="  dark:bg-gray-900">
      <Navbar />
      <div className="flex justify-center align-middle dark:bg-gray-900  h-screen place-content-center	">
        {children}
      </div>
    </div>
  );
};

export default Layout;
