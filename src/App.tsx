import { useEffect } from "react";

import { useFlameo } from "./hooks/useFlameo";
import { usePagination } from "./hooks/usePagination";
import { useBG } from "./hooks/useBG";

import Pagination from "./components/Pagination";
import CurrentFlameo from "./components/CurrentFlameo";

import Header from "./components/Header";
import Chat from "./components/Chat";
import Restart from "./components/Restart";

function App() {
  const { flameos, maxIndex, handleNewFlameo } = useFlameo();
  const { currentIndex, restartIndex, goPreviousPage, goNextPage } = usePagination({ maxIndex: maxIndex });
  const { bg, handleChange, handleBG } = useBG();

  useEffect(() => {
    restartIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flameos]);

  const queryParams = new URLSearchParams(location.search);
  const index = Number(queryParams.get("message")) || 0;

  const handleRestart = () => {
    restartIndex();
    handleNewFlameo();
  };

  const slicedFlameos = flameos ? flameos.slice(0, currentIndex) : null;
  const background = handleBG(bg);

  return (
    <>
      <header className="py-4 text-center bg-zinc-900 text-zinc-400">
        <h1 className="text-2xl font-bold">Flameo lol</h1>
      </header>
      <main className="mb-[calc(4rem+1px)] flex flex-col items-center py-8 sm:py-8 flex-1">
        {/* Controls */}
        <div className="flex justify-center gap-4 mb-4">
          <Pagination
            currentIndex={currentIndex}
            maxIndex={maxIndex}
            goPreviousPage={goPreviousPage}
            goNextPage={goNextPage}
          />
          <Restart handleRestart={handleRestart} />
        </div>

        {/* Content */}
        <div className="w-full max-w-xl px-4">
          <div className="flex flex-row items-center justify-between">
            <Header bg={bg} handleChange={handleChange} />
          </div>
          <div className={`relative flex flex-col p-4 bg-zinc-950 rounded-lg ${background}`}>
            <CurrentFlameo index={index} maxIndex={maxIndex} />
            <Chat flameos={slicedFlameos} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
