import { Navigate, Outlet } from "react-router-dom";

const isLoggedIn = () => {
  const data =  localStorage.getItem("token")
  console.log("publicroute",data);
  const {token} = data ? JSON.parse(data) : {token:null}
    return token
  };

export const PublicRoute = () => {
  return !isLoggedIn() ? <Outlet /> : <Navigate to="/usermanagement" />;
};
