const CurrentFlameo = ({ index, maxIndex }: { index: number; maxIndex: number }) => {
  return (
    <div className="flex flex-col items-center justify-center w-1/5 text-zinc-400">
      <span className="text-lg font-bold">Flameo nº</span>
      <span>
        {index + 1 > maxIndex ? maxIndex : index + 1}/{maxIndex}
      </span>
    </div>
  );
};

export default CurrentFlameo;
