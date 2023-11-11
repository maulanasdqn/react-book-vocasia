import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Routes } from "@/routers";
import "./index.css";
import { LoadingSpinner } from "@/components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Routes} fallbackElement={<LoadingSpinner />} />
  </React.StrictMode>,
);
