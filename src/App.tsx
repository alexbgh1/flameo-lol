import { useFlameo } from "./hooks/useFlameo";
import ChatMessage from "./ChatMessage";

function App() {
  const { flameos, handleNewFlameo } = useFlameo();
  return (
    <div className="App">
      <header className="text-lg">
        <button onClick={handleNewFlameo}>Nuevo Flameo</button>
        <div className="bg-zinc-900">
          {flameos.map((msg, index) => (
            <ChatMessage key={index} msg={msg} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
