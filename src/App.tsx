import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { RootRoute } from "./Router/RootRoute";
import Loader from "./Loader/Loader";
import { useSelector } from "react-redux";

const route = createHashRouter(RootRoute,{basename:"/"});

function App() {
  const { loading, error, userData } = useSelector((state: any) => state.main);

  return <>
         {loading&& <Loader />}
  
  <RouterProvider router={route} />
  </>
}

export default App;
