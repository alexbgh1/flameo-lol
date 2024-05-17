import { useState } from "react";
import { Background } from "../types/background";

const useBG = () => {
  const [bg, setBg] = useState<Background["value"]>("bg:none");

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLLIElement;
    const value = (target.getAttribute("data-value") as Background["value"]) || "bg:none";
    setBg(value);
  };

  const handleBG = (bg: Background["value"]) => {
    const splitBG = bg.split(":");
    const isBG = splitBG[0] === "bg" ? true : false;
    return isBG ? splitBG[1] : `${splitBG[1]}`;
  };

  return { bg, handleChange, handleBG };
};

export { useBG };
