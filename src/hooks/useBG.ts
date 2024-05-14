import { useState } from "react";

const useBG = () => {
  const [bg, setBg] = useState<string>("bg:none");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBg(e.target.value);
  };

  return { bg, handleChange };
};

export { useBG };
