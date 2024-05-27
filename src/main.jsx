import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Root from "./Layout/Root";
import Main from "./Layout/Main";
import Login from "./Layout/Login";
import LoginLayout from "./Component/LoginLayout";
import SignupLayout from "./Component/SignupLayout";
import Details from "./Layout/Details";
import Cart from "./Layout/Cart";
import toast, { Toaster } from 'react-hot-toast';
import AddProduct from "./Layout/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Main /> },
      {
        path: "user",
        element: <Login />,
        children: [
          { path: "", element: <LoginLayout /> },
          { path: "login", element: <LoginLayout /> },
          { path: "signup", element: <SignupLayout /> },
        ],
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(`https://fakestoreapi.com/products/${params.id}`),
      },
      { path: "/cart", element: <Cart /> },
      { path: "/newproduct", element: <AddProduct /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
);
