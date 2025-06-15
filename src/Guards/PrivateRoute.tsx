import { Navigate, Outlet } from "react-router-dom";

const isLoggedIn = () => {
  return false;
};

export const PrivateRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/" replace />;
};
