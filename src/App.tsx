import { useFlameo } from "./hooks/useFlameo";
import { usePagination } from "./hooks/usePagination";
import { useBG } from "./hooks/useBG";

import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Chat from "./components/Chat";
import { useEffect } from "react";
import Restart from "./components/Restart";

function App() {
  const { flameos, maxIndex, handleNewFlameo } = useFlameo();
  const { currentIndex, restartIndex, goPreviousPage, goNextPage } = usePagination({ maxIndex: maxIndex });
  const { bg, handleChange } = useBG();

  useEffect(() => {
    restartIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flameos]);

  const handleRestart = () => {
    restartIndex();
    handleNewFlameo();
  };

  const slicedFlameos = flameos ? flameos.slice(0, currentIndex) : null;
  return (
    <>
      <header className="py-4 text-center bg-zinc-900 text-zinc-400">
        <h1 className="text-2xl font-bold">Flameos lol</h1>
      </header>
      <main className="mb-[calc(4rem+1px)] flex flex-col items-center py-8 sm:py-8 flex-1">
        <div className="flex justify-center gap-4 mb-4">
          <Pagination
            currentIndex={currentIndex}
            maxIndex={maxIndex}
            goPreviousPage={goPreviousPage}
            goNextPage={goNextPage}
          />
          <Restart handleRestart={handleRestart} />
        </div>

        <div className="w-full max-w-xl px-4">
          <Header bg={bg} handleChange={handleChange} />
          <Chat bg={bg} flameos={slicedFlameos} />
        </div>
      </main>
    </>
  );
}

export default App;
