import { useState, useEffect } from "react";
import rawMessages from "../data/lol-messages.json";
import { ChatMessage } from "../types/chatMessage";
import { useNavigate, useLocation } from "react-router-dom";

const useFlameo = () => {
  const [flameos, setFlameos] = useState<ChatMessage[] | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const getRandomFlameo = () => {
    const randomIndex = Math.floor(Math.random() * rawMessages.length);
    return { index: randomIndex, message: rawMessages[randomIndex] } as { index: number; message: ChatMessage[] };
  };

  const getFlameoByIndex = (index: number) => {
    return rawMessages[index] as ChatMessage[];
  };

  const handleNewFlameo = () => {
    const { index, message } = getRandomFlameo();
    navigate(`?message=${index}`, { replace: true });
    setFlameos(message);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const index = queryParams.get("message");

    if (index !== null) {
      const flameo = getFlameoByIndex(Number(index));
      setFlameos(flameo);
    } else {
      handleNewFlameo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, navigate]);

  return { flameos, handleNewFlameo };
};

export { useFlameo };

// import { useState, useEffect } from "react";
// import rawMessages from "../data/lol-messages.json";
// import { ChatMessage } from "../types/chatMessage";

// const useFlameo = () => {
//   const [flameos, setFlameos] = useState<ChatMessage[] | []>([]);
//   const getRandomFlameo = () => {
//     const randomIndex = Math.floor(Math.random() * rawMessages.length);
//     return rawMessages[randomIndex] as ChatMessage[];
//   };

//   useEffect(() => {
//     const newFlameo = getRandomFlameo();
//     setFlameos(newFlameo);
//   }, []);

//   const handleNewFlameo = () => {
//     const newFlameo = getRandomFlameo();
//     setFlameos(newFlameo);
//   };

//   return { flameos, handleNewFlameo };
// };

// export { useFlameo };
