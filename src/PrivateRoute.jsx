import { Navigate, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const PrivateRoute = ({ children }) => {
  let location = useLocation();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
