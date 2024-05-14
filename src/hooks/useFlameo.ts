import { useState, useEffect } from "react";
import rawMessages from "../data/lol-messages.json";
import { ChatMessage } from "../types/chatMessage";

const useFlameo = () => {
  const [flameos, setFlameos] = useState<ChatMessage[] | []>([]);
  const getRandomFlameo = () => {
    const randomIndex = Math.floor(Math.random() * rawMessages.length);
    return rawMessages[randomIndex] as ChatMessage[];
  };

  useEffect(() => {}, []);

  const handleNewFlameo = () => {
    const newFlameo = getRandomFlameo();
    setFlameos(newFlameo);
  };

  return { flameos, handleNewFlameo };
};

export { useFlameo };
