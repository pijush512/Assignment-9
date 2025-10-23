import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Components/Home';
import Root from '../Root/Root';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import ErrorPage from '../Components/ErrorPage/ErrorPage';



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
        path: "/contact",
        Component: Contact,
      },

    ]
  },
]);


export default router;