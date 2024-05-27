import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
const Rating = ({ rating }) => {
  const fullStar = [];
  const halfStar = [];
  const rate = Math.ceil(rating);
  const remain = 5 - rate;
  for (let i = 0; i < rate; i++) {
    fullStar.push(
      <span key={`full${i}`}>
        <FaStar className="text-pale-red" />
      </span>
    );
  }
  for (let i = 0; i < remain; i++) {
    halfStar.push(
      <span key={`half${i}`}>
        <FaRegStar className="text-pale-red" />
      </span>
    );
  }

  return <div className="flex ">{fullStar.concat(halfStar)}</div>;
};

export default Rating;
