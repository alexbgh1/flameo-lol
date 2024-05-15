import { useState } from "react";

const useBG = () => {
  const [bg, setBg] = useState<string>("bg:none");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBg(e.target.value);
  };

  const handleBG = (bg: string) => {
    const splitBG = bg.split(":");
    const isBG = splitBG[0] === "bg" ? true : false;
    return isBG ? splitBG[1] : `${splitBG[1]}`;
  };

  return { bg, handleChange, handleBG };
};

export { useBG };
