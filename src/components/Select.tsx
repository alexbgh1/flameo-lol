import { useId } from "react";
import { cn } from "../lib/utils";

interface SelectProps {
  className?: string;
  label: string;
  value: string;
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ className, label, value, children, onChange }: SelectProps) => {
  const selectId = useId();
  return (
    <div className="flex flex-col w-full items-center">
      <label htmlFor={selectId} className="text-lg text-zinc-400 font-bold">
        {label}
      </label>
      <select
        id={selectId}
        onChange={onChange}
        value={value}
        // words: 20char then "..."
        className={cn(
          "truncate bg-zinc-900 text-zinc-400 uppercase font-bold pl-2 pr-3 py-1.5 my-2 rounded-sm transition duration-300 ease-in-out hover:bg-zinc-800 hover:text-zinc-200 outline-none",
          className || ""
        )}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
