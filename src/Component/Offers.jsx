import React from "react";
import img1 from "../assets/iPhone-XS-1-1.webp";
import img2 from "../assets/Launch a New Product.webp";
import img3 from "../assets/Screen-Shot-2023-05-09-at-9.50.02-AM-1024x650.png";

const Offers = () => {
  return (
    <div className="mt-12 container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div className="h-full relative">
        <img src={img3} alt="" className="h-full" />
        <div className="h-full absolute top-0 p-5 bg-gradient-to-t from-pale-red w-full">
          <p style={{ color: "white" }} className="">
            New Collection
          </p>
          <h1 style={{ color: "white" }} className="font-bold  text-2xl">
            Get Up to 40% Off
          </h1>
        </div>
      </div>
      <div className="flex gap-5 flex-wrap w-full">
        <div className="relative w-full">
          <img src={img2} alt="" className="w-full"/>
          <div className="h-full absolute top-0 p-5 bg-gradient-to-t from-[#d8dbe5] w-full ">
            <p style={{ color: "white" }} className="">
              Stock Clear
            </p>
            <h1 style={{ color: "white" }} className="font-bold  text-2xl">
              Get Up to 50% Off
            </h1>
          </div>
        </div>
        <div className="relative w-full">
          <img src={img1} alt="" className="w-full"/>
          <div className="h-full absolute top-0 p-5 bg-gradient-to-t from-gray w-full ">
            <p style={{ color: "white" }} className="">
              Summer Sale
            </p>
            <h1 style={{ color: "white" }} className="font-bold  text-2xl">
             Sale 20%
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
