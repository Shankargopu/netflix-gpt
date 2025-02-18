import React from "react";
import { RootState } from "../utils/appStore";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const user = useSelector((store: RootState) => store.user);
  console.log(user.user);
  return user.user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
