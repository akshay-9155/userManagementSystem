import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import LoginRegister from './LoginRegister/LoginRegister';
const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginRegister/>
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