import { useState, useEffect, useRef } from "react";
import { resolvePath } from "../utils";
import { cn } from "../lib/utils";

interface PaginationProps {
  className?: string;
  currentIndex: number;
  maxIndex: number;
  goPreviousPage: () => void;
  goNextPage: () => void;
}
const Pagination = ({ className, currentIndex, goPreviousPage, goNextPage, maxIndex }: PaginationProps) => {
  const soundRef = useRef<HTMLAudioElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    soundRef.current?.play();
  }, [maxIndex, currentIndex]);
  if (!mounted) return null;

  return (
    <>
      <audio ref={soundRef} src={resolvePath("/sound/message-sound.mp3")} />
      <button
        className={cn(
          "transition-colors duration-300 text-zinc-300 hover:text-zinc-300 disabled:opacity-50",
          className
        )}
        onClick={goPreviousPage}
        disabled={currentIndex === 0}
      >
        Anterior
      </button>
      <button
        className={cn(
          "transition-colors duration-300 text-zinc-300 hover:text-zinc-300 disabled:opacity-50",
          className
        )}
        onClick={goNextPage}
        disabled={currentIndex === maxIndex}
      >
        Siguiente
      </button>
    </>
  );
};

export default Pagination;
