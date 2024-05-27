import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const DetailsLayout = ({ details }) => {
  const [quantity, setQuantity] = useState(1);
  const HandleAdd = () => {
    setQuantity(quantity + 1);
  };
  const HandleRemove = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const HandleCart = () => {
    const itemFromcart = localStorage.getItem("cart");
    const cart = JSON.parse(itemFromcart);
    if (cart) {
      const existingItem = cart.findIndex((item) => item.id === details.id);
      if (existingItem !== -1) {
        cart[existingItem].quantity = quantity;
      } else {
        cart.push({ ...details, quantity: quantity });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
       localStorage.setItem(
        "cart",
        JSON.stringify([{ ...details, quantity: quantity }])
      );
    }
    console.log(cart)
  };

  return (
    <div className=" px-4 container mx-auto py-10">
      <div className="card rounded grid grid-cols-1 md:grid-cols-2 gap-5  justify-between items-center bg-base-100 ">
        <figure className="rounded">
          <img
            src={details?.image}
            alt="Album"
            className="rounded w-full h-full"
          />
        </figure>
        <div className="p-0 md:card-body rounded">
          <span className="uppercase text-sm mb-5">Home / detail</span>
          <h2 className="card-title text-2xl">{details.title}</h2>
          <Rating rating={details?.rating?.rate} />
          <div className="flex gap-5 mt-2">
            <span>{details?.rating?.rate}</span>
            <span>{details?.rating?.count} reviews</span>
          </div>
          <p className="my-5 text-3xl font-bold">${details?.price}</p>
          <p className="text-gray">{details.description}</p>

          <div className="mt-5 flex  gap-2 rounded">
            <div className="flex rounded items-center bg-neutral-100 ">
              <button
                onClick={HandleAdd}
                className="btn outline-0 border-0 rounded-none hover:text-white p-3 hover:bg-pale-red hover:text-neutral-50 duration-300 transition-all "
              >
                <FaPlus />
              </button>
              <button className="btn outline-0 border-0 rounded-none hover:text-white p-3 hover:bg-pale-red hover:text-neutral-50 duration-300 transition-all ">
                {quantity}
              </button>
              <button
                onClick={HandleRemove}
                className="btn outline-0 border-0 rounded-none hover:text-white p-3 hover:bg-pale-red hover:text-neutral-50 duration-300 transition-all "
              >
                <FaMinus />
              </button>
            </div>
            <button
              onClick={() => HandleCart()}
              className="px-4 py-2 rounded bg-pale-red text-sm md:text-base duration-300  text-neutral-50 font-semibold w-full hover:bg-neutral-950"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsLayout;
