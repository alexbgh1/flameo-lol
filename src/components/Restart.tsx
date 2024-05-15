import RefreshIcon from "../icons/icon";

interface RestartProps {
  handleRestart: () => void;
}
const Restart = ({ handleRestart }: RestartProps) => {
  return (
    <button className="text-zinc-400" onClick={handleRestart}>
      <RefreshIcon className="w-4 h-4 transition-colors duration-300 fill-zinc-500 hover:fill-zinc-400 " />
    </button>
  );
};

export default Restart;
