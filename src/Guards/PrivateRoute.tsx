import { Navigate, Outlet } from "react-router-dom";

const isLoggedIn = () => {
  const data = localStorage.getItem("token");
  const { token } = data ? JSON.parse(data) : { token: null };
  return token;
};

export const PrivateRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to="/" />;
};
