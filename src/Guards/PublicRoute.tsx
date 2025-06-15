import { Navigate, Outlet } from "react-router-dom";

const isLoggedIn = () => {
  return false;
};

export const PublicRoute = () => {
  return !isLoggedIn() ? <Outlet /> : <Navigate to="/usermanagement" />;
};
