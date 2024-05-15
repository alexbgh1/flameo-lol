import { useState } from "react";

const usePagination = ({ maxIndex = 0 }: { maxIndex: number }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const restartIndex = () => setCurrentIndex(0);

  const goPreviousPage = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((prev) => prev - 1);
  };
  const goNextPage = () => {
    if (currentIndex === maxIndex) return;
    setCurrentIndex((prev) => prev + 1);
  };

  return { currentIndex, restartIndex, goPreviousPage, goNextPage };
};

export { usePagination };
