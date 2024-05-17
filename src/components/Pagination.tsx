import { cn } from "../lib/utils";

interface PaginationProps {
  className?: string;
  currentIndex: number;
  maxIndex: number;
  goPreviousPage: () => void;
  goNextPage: () => void;
  playSound?: () => void;
}
const Pagination = ({ className, currentIndex, goPreviousPage, goNextPage, playSound, maxIndex }: PaginationProps) => {
  return (
    <>
      <button
        className={cn(
          "transition-colors duration-300 text-zinc-300 hover:text-zinc-300 disabled:opacity-50",
          className
        )}
        onClick={() => {
          goPreviousPage();
          playSound && playSound();
        }}
        disabled={currentIndex === 0}
      >
        Anterior
      </button>
      <button
        className={cn(
          "transition-colors duration-300 text-zinc-300 hover:text-zinc-300 disabled:opacity-50",
          className
        )}
        onClick={() => {
          goNextPage();
          playSound && playSound();
        }}
        disabled={currentIndex === maxIndex}
      >
        Siguiente
      </button>
    </>
  );
};

export default Pagination;
