import { useRef, useEffect } from "react";

import { useFlameo } from "./hooks/useFlameo";
import { usePagination } from "./hooks/usePagination";
import { useBG } from "./hooks/useBG";

import { resolvePath } from "./utils";

import Restart from "./components/Restart";
import Header from "./components/Header";
import Chat from "./components/Chat";

import Pagination from "./components/Pagination";
import CurrentFlameo from "./components/CurrentFlameo";

function App() {
  const { flameos, maxIndex, totalMessages, handleNewFlameo } = useFlameo();
  const { currentIndex, restartIndex, goPreviousPage, goNextPage } = usePagination({ maxIndex: maxIndex });
  const { bg, handleChange, handleBG } = useBG();
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    if (!audioRef.current) return;
    audioRef.current?.play();
  };

  useEffect(() => {
    restartIndex();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flameos]);

  const queryParams = new URLSearchParams(location.search);
  const index = Number(queryParams.get("message")) || 0;

  const handleRestart = () => {
    restartIndex();
    handleNewFlameo();
    playSound();
  };

  const slicedFlameos = flameos ? flameos.slice(0, currentIndex) : null;
  const background = handleBG(bg);

  return (
    <>
      <header className="py-4 text-center bg-zinc-900 text-zinc-400">
        <h1 className="text-2xl font-bold">Flameo lol</h1>
      </header>
      <main className="mb-[calc(4rem+1px)] flex flex-col items-center py-16 sm:py-8 flex-1">
        {/* Audio */}
        <audio ref={audioRef} src={resolvePath("/sound/message-sound.mp3")} />
        {/* Controls */}
        <div className="w-full max-w-xl px-4">
          <div className="flex flex-row items-center justify-center gap-4 mb-4">
            <Restart handleRestart={handleRestart} />
            <Header bg={bg} handleChange={handleChange} />
          </div>

          {/* Chat */}
          <div className={`relative flex flex-col p-4 bg-zinc-950 rounded-lg ${background}`}>
            <div className="flex flex-row items-center justify-between mb-4">
              <div className="flex flex-row items-center gap-4">
                <Pagination
                  className="z-[2]"
                  currentIndex={currentIndex}
                  maxIndex={maxIndex}
                  goPreviousPage={goPreviousPage}
                  goNextPage={goNextPage}
                  playSound={playSound}
                />
              </div>
              <CurrentFlameo index={index} maxIndex={totalMessages} />
            </div>
            <Chat flameos={slicedFlameos} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
