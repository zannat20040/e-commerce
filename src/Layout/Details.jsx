import React, { useEffect, useState } from "react";
import DetailsLayout from "../Component/DetailsLayout";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../Shared Component/useAxiosPublic";
import { IoShareSocial, IoBagHandleSharp } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import Button from "../Shared Component/Button";
import { Link } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const [recommended, setRecommended] = useState([]);
  useEffect(() => {
    axiosPublic
      .get(`/products/category/${details.category}`)
      .then((res) => setRecommended(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <DetailsLayout details={details} />
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-2xl font-bold">Recommended Products</h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-between items-center pb-10">
          {recommended.map((product) => (
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
    </div>
  );
};

export default Details;
