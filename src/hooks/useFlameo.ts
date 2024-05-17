import { useState, useEffect } from "react";
import rawMessages from "../data/lol-messages.json";
import { ChatMessage } from "../types/chatMessage";
import { useNavigate, useLocation } from "react-router-dom";

const useFlameo = () => {
  const [flameos, setFlameos] = useState<ChatMessage[] | null>(null);
  const [maxIndex, setMaxIndex] = useState<number>(0);
  const navigate = useNavigate();
  const location = useLocation();

  const getRandomFlameo = () => {
    let randomIndex = Math.floor(Math.random() * rawMessages.length);
    // Should be different from the current 'flameo'
    while (flameos && Object.is(flameos, rawMessages[randomIndex])) {
      randomIndex = Math.floor(Math.random() * rawMessages.length);
    }

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

  useEffect(() => {
    setMaxIndex(flameos ? flameos.length : 0);
  }, [flameos]);

  return { flameos, maxIndex, handleNewFlameo };
};

export { useFlameo };
