import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Animals from "../Pages/Animals/Animals";
import AnimalDetails from "../Pages/Animals/AnimalDetails";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/animals",
    element: <Animals></Animals>,
  },
  {
    path: "/animalsDetails/:id",
    element: <AnimalDetails></AnimalDetails>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
]);
