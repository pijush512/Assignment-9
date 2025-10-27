import React, { Component } from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Root from '../Root/Root';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import Register from '../Components/Register/Register';
import Login from '../Components/Login/Login';
import PrivateRoute from './PrivateRoute';
import GameDetails from '../Components/GameDetails/GameDetails';
import Profile from '../Components/Profile/Profile';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
        loader: async () => {
          const res = await fetch("/games.json");
          const data = await res.json();          // JSON parse
          return data;
        },
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
      {
        path: "/game/:id",
        element: <PrivateRoute>
          <GameDetails></GameDetails>
        </PrivateRoute>,
        loader: async () => {
          const res = await fetch("/games.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/profile",
        Component: Profile,
      }
    ]
  },
]);


export default router;