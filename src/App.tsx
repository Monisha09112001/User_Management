import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { RootRoute } from "./Router/RootRoute";

const route = createHashRouter(RootRoute,{basename:"/"});

function App() {
  return <>
  <RouterProvider router={route} />
  <p>kjl</p>
  </>
}

export default App;
