import { useFlameo } from "./hooks/useFlameo";
import { useBG } from "./hooks/useBG";

import Header from "./components/Header";
import Chat from "./components/Chat";

function App() {
  const { flameos, handleNewFlameo } = useFlameo();
  const { bg, handleChange } = useBG();

  return (
    <>
      <header className="bg-zinc-900 text-zinc-400 text-center py-4">
        <h1 className="text-2xl font-bold">Flameos lol</h1>
      </header>
      <main className="mb-[calc(4rem+1px)] flex flex-col items-center py-8 sm:py-8 flex-1 sm:justify-center">
        <div className="px-4 max-w-xl w-full">
          <Header bg={bg} handleNewFlameo={handleNewFlameo} handleChange={handleChange} />
          <Chat bg={bg} flameos={flameos} />
        </div>
      </main>
    </>
  );
}

export default App;
