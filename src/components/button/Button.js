import React from "react";

const Button = ({
  onClick,
  className,
  children,
  type = "button",
  bgColor = "primary",
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg capitalize ${bgClassName} w-full mt-auto ${className} hover:opacity-75`}
    >
      {children}
    </button>
  );
};

export default Button;
