import React from "react";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";
import { MdOutlineFacebook } from "react-icons/md";
import {
  FaTwitter,
  FaYoutube,
  FaRegUser,
  FaCartShopping,
  FaInstagram,
} from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const navList = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active text-pale-red font-medium"
            : "hover:text-pale-red font-medium duration-200 px-5"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/newproduct"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active text-pale-red font-medium"
            : "hover:text-pale-red font-medium duration-200 px-5"
        }
      >
        Add Product
      </NavLink>
      <NavLink
        to="/messages"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active text-pale-red font-medium"
            : "hover:text-pale-red font-medium duration-200  px-5"
        }
      >
        Shop
      </NavLink>
      <NavLink
        to="/messages"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active text-pale-red font-medium "
            : "hover:text-pale-red font-medium duration-200  px-5"
        }
      >
        Blog
      </NavLink>
    </>
  );

  return (
    <div
      style={{ backgroundColor: "white" }}
      className="sticky top-0 z-50  shadow-sm "
    >
      <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap sm:flex-nowrap border-b border-b-neutral-100 justify-center sm:justify-between   items-center sm:gap-5 gap-3 py-3 ">
          <div className="flex flex-wrap sm:flex-nowrap sm:gap-3 items-center justify-center sm:justify-start ">
            <p className="flex gap-1 items-center">
              <TfiEmail className="text-pale-red " />{" "}
              <span>repliq@example.com</span>
            </p>
            <p className="flex gap-1 items-center">
              <TfiLocationPin className="text-pale-red " />
              <span>Dhanmondi,Dhaka,Bangladesh</span>
            </p>
          </div>
          <div className="flex gap-3">
            <IoIosCall className="text-pale-red text-xl" />
            <MdOutlineFacebook className="text-pale-red text-xl" />
            <FaTwitter className="text-pale-red text-xl" />
            <FaYoutube className="text-pale-red text-xl" />
            <FaInstagram className="text-pale-red text-xl" />
          </div>
        </div>
        <div className="navbar bg-base-100 p-0">
          <div className="navbar-start">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className=" hover:bg-pale-red hover:text-neutral-50 rounded hover:mr-3 duration-300 transition-all  py-0  btn btn-ghost text-pale-red lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className=" menu menu-sm dropdown-content mt-3 z-[1] p-6 shadow bg-base-100  w-52 "
              >
                {navList}
              </ul>
            </div>
            <a className=" text-xl text-pale-red font-bold">REPLIQ</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-3">{navList}</ul>
          </div>
          <div className="navbar-end flex items-center gap-4">
            <NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active text-pale-red font-medium "
                  : "hover:text-pale-red font-medium duration-200  "
              }
            >
              <FaCartShopping />
            </NavLink>
            <NavLink
              to="/user"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "active text-pale-red font-medium "
                  : "hover:text-pale-red font-medium duration-200  "
              }
            >
              <FaRegUser />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
