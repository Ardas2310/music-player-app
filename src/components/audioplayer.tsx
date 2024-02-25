import Controls from "./Controls";
import Progressbar from "./Progressbar";

const Audioplayer = () => {
  return (
    <div className="flex flex-col items-center">
      <Progressbar/>
      <Controls />
    </div>
  );
};

export default Audioplayer;
