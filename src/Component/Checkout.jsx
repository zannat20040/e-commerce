import React from "react";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import Button from "../Shared Component/Button";
import toast from "react-hot-toast";

const Checkout = () => {
  const cartItem = localStorage.getItem("cart");
  const items = JSON.parse(cartItem);

  const totalSum = items.reduce((sum, data) => sum + data.price * data.quantity, 0);
  return (
    <div>
      <div className="flex w-full justify-center gap-2 flex-col items-center">
        <TiTick className="text-3xl w-10 text-neutral-50 h-10 rounded-full bg-pale-red p-2" />
        <h1 className="text-3xl font-bold text-center">Your order is completed! </h1>
        <p>Your order has been recieved</p>
      </div>

      <div className="max-w-xl mx-auto border-dashed mt-10 border-pale-red p-10 border ">
        <h1 className="uppercase  text-lg">order details</h1>
        <div className="my-5">
          {items.map((item, index) => (
            <div className="flex flex-col justify-start sm:grid sm:grid-cols-8 gap-5 sm:justify-between ">
             <div className="flex gap-3 col-span-5">
             <span>{index + 1}. </span>
              <h1 className="text-start ">{item.title}</h1>
             </div>
             <div className="flex justify-between gap-3 w-full">
             <span>X{item.quantity}</span>
              <span>${item.quantity * item.price}</span>
             </div>
            </div>
          ))}
        </div>

        <span>Total: {totalSum}$</span>

        <div className="mt-6 ">
          <Link
            to={"/"}
            onClick={() => toast.success("Your order placed successfully")}
          >
            <Button label={"Place order"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
