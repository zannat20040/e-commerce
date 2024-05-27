import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoShareSocial, IoBagHandleSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import Button from "../Shared Component/Button";
import { Link } from "react-router-dom";

const Product = () => {
  const [allProducts, setAllproduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setAllproduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container py-20 mx-auto px-4 ">
      <div className="flex flex-wrap justify-between gap-5 ">
        <h1 className="text-2xl font-bold">Product List</h1>
        <div>
          <span>Filter by</span>
          <select className=" outline-0 p-2 bg-neutral-200 rounded ml-2">
            <option value="men's clothing" className="capitalize">
              men's clothing
            </option>
            <option value="jewelery" className="capitalize">
              jewelery
            </option>
            <option value="electronics" className="capitalize">
              electronics
            </option>
            <option value="women's clothing" className="capitalize">
              women's clothing
            </option>
          </select>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-between items-center">
        {allProducts.map((product) => (
          <div className="card bg-base-100 shadow relative rounded group flex flex-col h-full">
            <figure className="px-10 pt-10 h-52">
              <img
                src={product?.image}
                className="h-full group-hover:scale-105 scale-100 duration-300 transition-all ease-in-out"
              />
            </figure>
            <div className="flex flex-col gap-2 absolute top-5 right-5 opacity-0 group-hover:opacity-100 duration-700 transition-all ease-in-out">
              <IoShareSocial className="bg-neutral-200 p-2 w-8 h-8 text-lg rounded hover:bg-pale-red hover:text-neutral-50 duration-500 transition-all ease-in-out " />
              <FaCartShopping className="bg-neutral-200 p-2 w-8 h-8 text-lg rounded hover:bg-pale-red hover:text-neutral-50 duration-500 transition-all ease-in-out" />
              <IoBagHandleSharp className="bg-neutral-200 p-2 w-8 h-8 text-lg rounded hover:bg-pale-red hover:text-neutral-50 duration-500 transition-all ease-in-out" />
            </div>
            <div className="card-body pb-4 items-center text-center flex flex-col flex-1">
              <h6 className="text-sm md:text-base font-semibold lg:text-lg">
                {product.title}
              </h6>
              <p className="text-gray-400 text-xs md:text-sm font-semibold capitalize">
                {product.category}
              </p>
              <Link to={`/details/${product.id}`} className="w-full">
                <Button label={"See Details"} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
