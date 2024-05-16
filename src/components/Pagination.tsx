import { useState, useEffect, useRef } from "react";
import { resolvePath } from "../utils";

interface PaginationProps {
  currentIndex: number;
  maxIndex: number;
  goPreviousPage: () => void;
  goNextPage: () => void;
}
const Pagination = ({ currentIndex, goPreviousPage, goNextPage, maxIndex }: PaginationProps) => {
  const soundRef = useRef<HTMLAudioElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    soundRef.current?.play();
  }, [currentIndex]);
  if (!mounted) return null;

  return (
    <>
      <audio ref={soundRef} src={resolvePath("/sound/message-sound.mp3")} />
      <button
        className="transition-colors duration-300 text-zinc-400 hover:text-zinc-300 disabled:opacity-50 "
        onClick={goPreviousPage}
        disabled={currentIndex === 0}
      >
        Anterior
      </button>
      <button
        className="transition-colors duration-300 text-zinc-400 hover:text-zinc-300 disabled:opacity-50 "
        onClick={goNextPage}
        disabled={currentIndex === maxIndex}
      >
        Siguiente
      </button>
    </>
  );
};

export default Pagination;
