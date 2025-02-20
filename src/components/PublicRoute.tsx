import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const { user } = useSelector((store: RootState) => store.user);
  return user ? <Navigate to="/Browse" /> : <Outlet />;
};

export default PublicRoute;
