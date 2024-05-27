import React from "react";
import Button from "../Shared Component/Button";
import { SiGmail } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="mt-10 max-w-md container px-4 mx-auto space-y-3 rounded  bg-white">
      {/* <h1 className="text-3xl font-bold text-center text-indigo-600">Login</h1> */}
      {/* Input fields and the form started */}
      <form action="" className="space-y-6">
        <div className="space-y-2 text-sm">
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Phone number"
            className="w-full px-4 py-3 rounded border border-neutral-200 focus:outline-none  "
          />
        </div>
        <div className="space-y-2 text-sm">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded border border-neutral-200 focus:outline-none "
          />
          <div className="flex justify-end text-xs ">
            <a
              href="#"
              className="hover:underline hover:text-pale-red transition-all duration-300"
            >
              Forgot Password?
            </a>
          </div>
        </div>
        {/* Sign in Button */}
        <Button label={"Log In"} />
      </form>
      <div className="flex items-center pt-4 space-x-2">
        <div className="flex-1 h-px bg-gray-300"></div>
        <p className="text-sm text-gray-600">Login with social accounts</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
      {/* Social icons */}
      <div className="flex justify-center space-x-4">
        <button
          aria-label="Log in with Google"
          className="p-3 rounded-full hover:bg-neutral-200 duration-300 transition-all"
        >
          <FaGoogle />
        </button>
        <button
          aria-label="Log in with Twitter"
          className="p-3 rounded-full hover:bg-neutral-200 duration-300 transition-all"
        >
          <FaFacebookF />
        </button>
        <button
          aria-label="Log in with GitHub"
          className="p-3 rounded-full hover:bg-neutral-200 duration-300 transition-all"
        >
          <SiGmail />
        </button>
      </div>
      <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
        Don't have an account?
        <Link
          to={"/user/signup"}
          className="underline hover:text-pale-red duration-300  transition-all"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginLayout;
