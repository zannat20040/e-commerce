import React, { useEffect, useState } from "react";
import useAxiosPublic from "../Shared Component/useAxiosPublic";
import { CiSquarePlus } from "react-icons/ci";
import toast from "react-hot-toast";

const Newproduct = () => {
  const [step, setStep] = useState(1);
  const [catagories, setCategories] = useState([]);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get("/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  const HandleNext = () => {
    setStep(step + 1);
  };
  const HandlePre = () => {
    setStep(step - 1);
  };

  return (
    <div className="mx-auto container px-4 mt-10 pb-10">
      <div className="flex flex-wrap md:grid grid-cols-3 justify-between   w-full">
        <div
          className={`flex gap-5 border-b py-4 pr-10 border-b-neutral-200 ${
            step >= 1 ? "text-pale-red border-b-pale-red" : ""
          }`}
        >
          <span className="font-bold text-xl ">01</span>
          <div>
            <p className="font-bold text-xl ">Company name</p>
            <p className={`${step >= 1 ? "text-pale-red " : ""} text-gray`}>
              Descride brand in a word{" "}
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
            <p className="font-bold text-xl ">Select Category</p>
            <p className={`${step >= 2 ? "text-pale-red " : ""} text-gray`}>
              Find and select your company category
            </p>
          </div>
        </div>
        <div
          className={`flex gap-5 border-b py-4 pr-10 border-b-neutral-200 ${
            step >= 3 ? "text-pale-red border-b-pale-red" : ""
          }`}
        >
          <span className="font-bold text-xl ">03</span>
          <div>
            <p className="font-bold text-xl ">Upload a Product</p>
            <p className={`${step >= 2 ? "text-pale-red " : ""} text-gray`}>
              Sell your best product
            </p>
          </div>
        </div>
      </div>
      {step == 1 && (
        <div className="card border-dashed border border-pale-red rounded mt-10 max-w-xl mx-auto bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title">Company name</h2>
            <p className="">Write a name that describe your brand perfectly</p>
            <input
              type="text"
              name="text"
              id="company"
              placeholder="brand/compnay name"
              className="w-full px-4 py-3 rounded border border-neutral-200 focus:outline-none mt-5"
            />
            <div className="card-actions justify-end">
              <button
                onClick={HandleNext}
                className="px-4 py-2 rounded bg-pale-red text-sm md:text-base duration-300  text-neutral-50 font-semibold w-full hover:bg-neutral-950"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {step == 2 && (
        <div className="card border-dashed border border-pale-red rounded mt-10 max-w-xl mx-auto bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title">Select Category</h2>
            <p className="">
              Select a catagory for your company or brand that describe yur
              product
            </p>
            <select
              type="text"
              name="text"
              id="company"
              placeholder="brand/compnay name"
              className="w-full px-4 py-3 rounded border border-neutral-200 focus:outline-none mt-5"
            >
              {catagories.map((cate) => (
                <option value={cate}>{cate}</option>
              ))}
            </select>
            <div className="card-actions justify-end">
              <button
                onClick={HandleNext}
                className="px-4 py-2 rounded bg-pale-red text-sm md:text-base duration-300  text-neutral-50 font-semibold w-full hover:bg-neutral-950"
              >
                Next
              </button>
              <button
                onClick={HandlePre}
                className="px-4 py-2 rounded bg-pale-red text-sm md:text-base duration-300  text-neutral-50 font-semibold w-full hover:bg-neutral-950"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
      {step == 3 && (
        <div className="card border-dashed border border-pale-red rounded mt-10 max-w-xl mx-auto bg-base-100 ">
          <div className="card-body">
            <h2 className="card-title">Upload your best</h2>
            <p className="">
              Give details of your product and upload instantly
            </p>
            <form action="" className="flex gap-2 flex-col mt-10">
              <div className="space-y-2 text-sm">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="product name"
                  className="w-full px-4 py-3 rounded border border-neutral-200 focus:outline-none  "
                />
              </div>
              <div className="space-y-2 text-sm">
                <textarea
                  type="text"
                  name="email"
                  id="email"
                  rows={4}
                  placeholder="write product description"
                  className="w-full px-4 py-3 rounded border border-neutral-200 focus:outline-none  "
                />
              </div>
              <div className="space-y-2 text-sm">
                <input
                  type="number"
                  name="email"
                  id="email"
                  placeholder="price"
                  className="w-full px-4 py-3 rounded border border-neutral-200 focus:outline-none  "
                />
              </div>
              <div className="space-y-2 text-sm">
                <div className="relative ">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="w-full px-4 py-3 rounded border border-neutral-200 focus:outline-none  opacity-0 "
                  />
                  <label
                    for="image"
                    className="rounded bg-neutral-200 absolute  top-0 w-full h-full right-0 bottom-0 left-0 "
                  >
                    <CiSquarePlus className="text-neutral-40  w-full h-full py-2 text-neutral-400 " />
                  </label>
                </div>
              </div>
            </form>
            <div className="card-actions justify-end">
              <button
                onClick={() =>
                  toast.success("Your product upload successfully")
                }
                className="px-4 py-2 rounded bg-pale-red text-sm md:text-base duration-300  text-neutral-50 font-semibold w-full hover:bg-neutral-950"
              >
                Upload
              </button>
              <button
                onClick={HandlePre}
                className="px-4 py-2 rounded bg-pale-red text-sm md:text-base duration-300  text-neutral-50 font-semibold w-full hover:bg-neutral-950"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newproduct;
