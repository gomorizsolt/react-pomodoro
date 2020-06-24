import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded disabled:opacity-75 disabled:cursor-not-allowed disabled:bg-red-400"
    {...props}
  >
    {children}
  </button>
);

export default Button;
