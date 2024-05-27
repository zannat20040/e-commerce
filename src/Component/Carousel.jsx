import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../assets/4eb28f04-053c-4529-a2ab-5c59f64aa94b.jpeg";
import img2 from "../assets/0820a91e-e131-49ab-bc2d-bb8970901c51.jpg";
import img3 from "../assets/beauty-ecommerce-products.jpg";
import img4 from "../assets/Launch a New Product.webp";
import img5 from "../assets/Screen-Shot-2023-05-09-at-9.50.02-AM-1024x650.png";
import img6 from "../assets/sony_wh1000xm5_1671161461_2976dde0.jpg";
// https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D

// https://cdn.dooca.store/165/products/djntyln7owpbzcrk2dbqgyosexpoi5somlkl_640x640+fill_ffffff.jpg?v=1663082143&webp=0

// https://img.freepik.com/premium-photo/black-bluetooth-wireless-headphones-isolate_288990-471.jpg

// https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D

// https://media.e-valy.com/cms/products/images/ab5b3c9b-59f6-4e26-847d-86a9ee0ce59e

// https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNob2VzfGVufDB8fDB8fHww

const Carousel = () => {
  return (
    <div className="carousel w-full h-[450px] relative">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute h-full top-0 bottom-0 left-0 right-0 m-auto sm:max-w-sm md:max-w-xl px-4 text-neutral-50 sm:w-full w-52 mx-auto">
          <div className="py-20 w-full text-center lg:text-left space-y-2 lg:space-y-5 gap-3 flex flex-col justify-center items-center h-full">
            <h1 className="text-lg md:text-2xl lg:text-[40px] font-bold capitalize">
              We are the only one solution to find your need
            </h1>
            <p className="text-xs md:text-lg">
              Let's find your needed product with multiple huge collections
            </p>
            <div className="bg-neutral-100 px-4 flex items-center justify-between w-full rounded">
              <input
                placeholder="search here"
                className="p-3 w-full outline-0 bg-neutral-100 rounded  text-gray"
              />
              <IoSearch />
            </div>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute h-full top-0 bottom-0 left-0 right-0 m-auto sm:max-w-sm md:max-w-xl px-4 text-neutral-50 sm:w-full w-52 mx-auto">
          <div className="py-20 w-full text-center lg:text-left space-y-2 lg:space-y-5 gap-3 flex flex-col justify-center items-center h-full">
            <h1 className="text-lg md:text-2xl lg:text-[40px] font-bold capitalize">
              We are the only one solution to find your need
            </h1>
            <p className="text-xs md:text-lg">
              Let's find your needed product with multiple huge collections
            </p>
            <div className="bg-neutral-100 px-4 flex items-center justify-between w-full rounded">
              <input
                placeholder="search here"
                className="p-3 w-full outline-0 bg-neutral-100 text-gray rounded"
              />
              <IoSearch />
            </div>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute h-full top-0 bottom-0 left-0 right-0 m-auto sm:max-w-sm md:max-w-xl px-4 text-neutral-50 sm:w-full w-52 mx-auto">
          <div className="py-20 w-full text-center lg:text-left space-y-2 lg:space-y-5 gap-3 flex flex-col justify-center items-center h-full">
            <h1 className="text-lg md:text-2xl lg:text-[40px] font-bold capitalize">
              We are the only one solution to find your need
            </h1>
            <p className="text-xs md:text-lg">
              Let's find your needed product with multiple huge collections
            </p>
            <div className="bg-neutral-100 px-4 flex items-center justify-between w-full rounded">
              <input
                placeholder="search here"
                className="p-3 w-full outline-0 bg-neutral-100 rounded text-gray"
              />
              <IoSearch />
            </div>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute h-full top-0 bottom-0 left-0 right-0 m-auto sm:max-w-sm md:max-w-xl px-4 text-neutral-50 sm:w-full w-52 mx-auto">
          <div className="py-20 w-full text-center lg:text-left space-y-2 lg:space-y-5 gap-3 flex flex-col justify-center items-center h-full">
            <h1 className="text-lg md:text-2xl lg:text-[40px] font-bold capitalize">
              We are the only one solution to find your need
            </h1>
            <p className="text-xs md:text-lg">
              Let's find your needed product with multiple huge collections
            </p>
            <div className="bg-neutral-100 px-4 flex items-center justify-between w-full rounded">
              <input
                placeholder="search here"
                className="p-3 w-full outline-0 bg-neutral-100 text-gray rounded"
              />
              <IoSearch />
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Carousel;
