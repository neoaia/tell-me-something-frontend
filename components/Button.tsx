import React from "react";
import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  label: string;
}

const Button = ({ label, type = "button", ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      className="bg-black text-white px-7 py-4 rounded-2xl cursor-pointer transition 
                 disabled:opacity-40 disabled:cursor-not-allowed
                 hover:opacity-70 hover:shadow-xl hover:-translate-y-1
                 disabled:hover:opacity-40 disabled:hover:shadow-none disabled:hover:translate-y-0"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
