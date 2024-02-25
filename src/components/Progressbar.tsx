const Progressbar = () => {
  return (
    <div className="flex flex-col">
      <input
        type="range"
        min={1}
        max={100}
        value={50}
        step={0.25}
        className="slider"
      />
          <div className="flex w-full flex-row justify-between mt-1">
            <span className="text-sm">01:00</span>
            <span className="text-xs">02:00</span>
          </div>
    </div>
  );
};

export default Progressbar;
