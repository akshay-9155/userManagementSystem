import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login/>
  }
]);

const Body = () => {
  return (
    <>
        <RouterProvider router = {browserRouter}/>
    </>
  )
}

export default Body