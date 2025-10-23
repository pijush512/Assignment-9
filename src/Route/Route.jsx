import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Root from '../Root/Root';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Register from '../Components/Register/Register';
import Login from '../Components/Login/Login';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },

    ]
  },
]);


export default router;