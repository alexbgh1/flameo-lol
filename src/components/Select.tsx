import { ArrowDownIcon } from "../icons/icon";
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";

interface SelectProps {
  className?: string;
  label: string;
  value: string;
  children: React.ReactNode;
}

const Select = ({ className, label, value, children }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [value]);

  return (
    <div className={cn("relative inline-block text-left", className)}>
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-zinc-900 px-3 py-2 text-sm font-semibold text-zinc-300 shadow-sm ring-1 ring-inset ring-zinc-500 hover:text-zinc-100 hover:bg-zinc-800"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          {label}
          <ArrowDownIcon fill="currentColor" className="w-5 h-5 -mr-1 text-gray-400" aria-hidden="true" />
        </button>
      </div>
      {/*  Content */}
      <div
        className={cn(
          "absolute right-0 z-30 w-56 mt-1 origin-top-right divide-y rounded-md shadow-lg  text-zinc-100 divide-zinc-900 bg-zinc-900 ring-1 ring-white ring-opacity-5 focus:outline-none",
          {
            hidden: !isOpen,
            block: isOpen,
          }
        )}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        {children}
      </div>
    </div>
  );
};
export default Select;
