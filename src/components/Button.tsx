import React from "react";
import { cn } from "../lib/utils";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-zinc-900 text-zinc-400 uppercase font-bold px-6 py-1.5 my-2 rounded-sm transition duration-300 ease-in-out hover:bg-zinc-800 hover:text-zinc-200 outline-none",
        className || ""
      )}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
