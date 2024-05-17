import Select from "./Select";

import { cn } from "../lib/utils";

import { backgrounds } from "../constants/background";
import { Background } from "../types/background";

interface HeaderProps {
  bg: Background["value"];
  handleChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Header = ({ bg, handleChange }: HeaderProps) => {
  return (
    <Select label="Cambiar fondo" value={bg}>
      <div className="py-1" role="none">
        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
        {backgrounds.map((background) => (
          <button
            key={background.value}
            onClick={handleChange}
            data-value={background.value}
            className={cn(
              "w-full text-left block px-4 py-2 text-sm text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300 ",
              bg === background.value ? "bg-zinc-800 text-zinc-100 hover:bg-zinc-800 hover:text-zinc-100" : ""
            )}
            role="menuitem"
          >
            {background.label}
          </button>
        ))}
      </div>
    </Select>
  );
};

export default Header;
