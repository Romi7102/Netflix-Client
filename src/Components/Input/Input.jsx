import React from "react";
import { BiErrorAlt } from "react-icons/bi";

const Input = ({ id, onChange, value, label, type, error }) => {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        className={`
            ${error ? "outline outline-red-600 outline-1" : ""}
            block 
            rounded-md 
            px-6 
            pt-6
            pb-1
            w-full
            text-md
            text-white
            bg-neutral-700
            appearance-none
            peer`}
        placeholder=""
      />

      <label
        htmlFor={id}
        className="
                absolute
                text-md
                text-zinc-400
                duration-150
                transform
                -translate-y-3
                scale-75
                top-4
                z-10
                origin-[0]
                left-6
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-3"
      >
        {label}
      </label>
      {error && (
        <>
          <div className="text-red-600 flex flex-row space-x-1 absolute justify-center items-center">
            <BiErrorAlt></BiErrorAlt>
            <span>Please enter a valid {label}.</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Input;
