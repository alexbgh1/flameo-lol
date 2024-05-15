import { useEffect, useRef } from "react";

interface PaginationProps {
  currentIndex: number;
  maxIndex: number;
  goPreviousPage: () => void;
  goNextPage: () => void;
}
const Pagination = ({ currentIndex, goPreviousPage, goNextPage, maxIndex }: PaginationProps) => {
  const soundRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (currentIndex === 0) return;
    soundRef.current?.play();
  }, [currentIndex]);

  return (
    <>
      <audio ref={soundRef} src="/sound/message-sound.mp3" />
      <button
        className="text-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={goPreviousPage}
        disabled={currentIndex === 0}
      >
        Anterior
      </button>
      <button
        className="text-zinc-400 disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={goNextPage}
        disabled={currentIndex === maxIndex}
      >
        Siguiente
      </button>
    </>
  );
};

export default Pagination;
