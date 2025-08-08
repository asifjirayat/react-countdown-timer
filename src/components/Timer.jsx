import { formatTime } from "../utils/functions.js";

export default function Timer({ totalSeconds }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-mono tracking-widest">
        {formatTime(totalSeconds)}
      </h2>
    </div>
  );
}
