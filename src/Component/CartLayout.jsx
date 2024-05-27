import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import Checkout from "./Checkout";

const CartLayout = () => {
  const [newQuantity, setNewQuantity] = useState();
  const [step, setStep] = useState(1);
  const cartItem = localStorage.getItem("cart");
  const items = JSON.parse(cartItem);

  const HandleAdd = (id) => {
    const existingItem = items.findIndex((item) => item.id === id);
    if (existingItem !== -1) {
      items[existingItem].quantity += 1;
      setNewQuantity(items[existingItem].quantity);
    }
    localStorage.setItem("cart", JSON.stringify(items));
  };
  const HandleRemove = (id) => {
    const existingItem = items.findIndex((item) => item.id === id);
    if (existingItem !== -1) {
      if (newQuantity > 0) {
        items[existingItem].quantity -= 1;
        setNewQuantity(items[existingItem].quantity);
      }
    }
    localStorage.setItem("cart", JSON.stringify(items));
  };
  const HandleDelete = (id) => {
    console.log("remove", id);
  };
  const HandleStep = (id) => {
    setStep(2);
    console.log("remove", id);
  };

  return (
    <div className="mt-10 container mx-auto px-4 ">
      <div className="grid sm:grid-cols-2 justify-between  lg:w-2/3 w-full">
        <div
          className={`flex gap-5 border-b py-4 pr-10 border-b-neutral-200 ${
            step >= 1 ? "text-pale-red border-b-pale-red" : ""
          }`}
        >
          <span className="font-bold text-xl ">01</span>
          <div>
            <p className="font-bold text-xl ">Shopping Bag</p>
            <p className={`${step >= 1 ? "text-pale-red " : ""} text-gray`}>
              Manage Your Item{" "}
            </p>
          </div>
        </div>
        <div
          className={`flex gap-5 border-b py-4 pr-10 border-b-neutral-200 ${
            step >= 2 ? "text-pale-red border-b-pale-red" : ""
          }`}
        >
          <span className="font-bold text-xl ">02</span>
          <div>
            <p className="font-bold text-xl ">Checkout & Confirm Bag</p>
            <p className={`${step >= 2 ? "text-pale-red " : ""} text-gray`}>
              Review & Submit Your order
            </p>
          </div>
        </div>
      </div>
      {step == 1 && (
        <div className="bg-gray-250   p-8 my-20 space-y-6">
          {/* top part  */}
          <div
            className={`flex border-b border-b-neutral-100  justify-between items-center`}
          >
            <h4 className="text-xl font-medium text-slate-800 uppercase ">
              Product
            </h4>
            <p className="text-sm font-medium text-gray-400 uppercase">
              edit cart
            </p>
          </div>

          {/*  Cart  map */}
          {items.map((item, idx) => (
            <div
              key={item?.id}
              className="grid grid-col-5 gap-5 md:gap-0 md:grid-cols-8 justify-between items-center border-b border-neutral-100 pb-6"
            >
              <div className="col-span-5 flex flex-wrap items-center gap-10">
                <img
                  className="w-[75px] h-[75px] rounded-lg bg-slate-500"
                  src={item.image}
                  alt=""
                />
                <div className="flex flex-col flex-wrap">
                  <span className="text-lg break-words font-medium">
                    {item?.title}
                  </span>
                  <p className="text-sm text-gray-400">
                    Category: {item?.category}
                  </p>
                  <p className="text-sm text-gray-400">Price: {item?.price}$</p>
                </div>
              </div>

              <div className="col-span-1 rounded items-center w-full flex justify-center  ">
                <button
                  onClick={() => HandleAdd(item.id)}
                  className="btn outline-0 border-0 rounded-none hover:text-white p-3 hover:bg-pale-red hover:text-neutral-50 duration-300 transition-all "
                >
                  <FaPlus />
                </button>
                <button className="btn outline-0 border-0 rounded-none hover:text-white p-3 hover:bg-pale-red hover:text-neutral-50 duration-300 transition-all ">
                  {item.quantity}
                </button>
                <button
                  onClick={() => HandleRemove(item.id)}
                  className="btn outline-0 border-0 rounded-none hover:text-white p-3 hover:bg-pale-red hover:text-neutral-50 duration-300 transition-all "
                >
                  <FaMinus />
                </button>
              </div>

              <div className="col-span-1 text-center">
                <h6 className="text-xl font-medium text-slate-800">
                  {item?.price * item.quantity}$
                </h6>
              </div>
              <div
                onClick={() => HandleDelete(item.id)}
                className="col-span-1 flex cursor-pointer justify-end"
              >
                <IoIosRemoveCircle className="text-2xl text-pale-red" />
              </div>
            </div>
          ))}
          <div className="space-y-10">
            <button
              onClick={HandleStep}
              className="px-4 py-2 rounded bg-pale-red text-sm md:text-base duration-300  text-neutral-50 font-semibold w-full hover:bg-neutral-950 uppercase"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      )}
      {step == 2 && (
        <div className="bg-gray-250   p-8 my-20 space-y-6">
       <Checkout />
        </div>
      )}
    </div>
  );
};

export default CartLayout;
