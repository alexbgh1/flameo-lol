const CurrentFlameo = ({ index, maxIndex }: { index: number; maxIndex: number }) => {
  return (
    <div className="flex flex-col items-end text-zinc-300">
      <p className="text-xs font-bold">flameo nº</p>
      <span className="text-sm">
        {index + 1 > maxIndex ? maxIndex : index + 1}/{maxIndex}
      </span>
    </div>
  );
};

export default CurrentFlameo;
