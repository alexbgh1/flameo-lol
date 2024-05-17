import { RefreshIcon } from "../icons/icon";

interface RestartProps {
  handleRestart: () => void;
}
const Restart = ({ handleRestart }: RestartProps) => {
  return (
    <button
      className="flex items-center gap-4
      [&>svg]:hover:fill-zinc-400
      bg-zinc-900 text-zinc-400 uppercase font-bold px-6 py-1.5 my-2 rounded-sm transition duration-300 ease-in-out hover:bg-zinc-800 hover:text-zinc-200 outline-none"
      onClick={handleRestart}
    >
      Roll
      <RefreshIcon className="w-4 h-4 transition-colors duration-300 fill-zinc-500" />
    </button>
  );
};

export default Restart;
