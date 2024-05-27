import React from 'react';

const Button = ({label}) => {
    return (
        <button className="px-4 py-2 rounded bg-pale-red text-sm md:text-base duration-300  text-neutral-50 font-semibold w-full hover:bg-neutral-950">
        {label}
      </button>
    );
};

export default Button;