import React from "react";
import LoginLayout from "../Component/LoginLayout";
import Navbar from "../Shared Component/Navbar";
import { Link, NavLink, Outlet } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="py-20">
        <div className="flex container mx-auto  w-full justify-center">
          <NavLink
            to={"login"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "active text-pale-red font-medium border-b-pale-red px-10 border-b pb-2"
                : "hover:text-pale-red font-medium duration-200 px-10 border-b pb-2 border-b-neutral-200"
            }
          >
           
            Log in
          </NavLink>
          <NavLink
            to={"signup"}
            className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "active text-pale-red font-medium border-b-pale-red px-10 border-b pb-2"
              : "hover:text-pale-red font-medium duration-200 px-10 pb-2 border-b-neutral-200 border-b"
          }
          >
           
            Register
          </NavLink>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Login;
