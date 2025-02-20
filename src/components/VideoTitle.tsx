import React from "react";
import { PlayCircleIcon, InfoIcon } from "lucide-react";
const VideoTitle = ({
  title,
  overview,
}: {
  title: string;
  overview: string;
}) => {
  return (
    <div className="aspect-video pt-[20%] px-12 text-wrap absolute bg-gradient-to-r from-black/40">
      <h2 className="text-3xl font-bold text-white">{title}</h2>
      <p className="max-w-2/4 w-1/4 py-6 text-sm text-white">{overview}</p>
      <div className="py-6 flex items-center gap-4">
        <button className="py-4 px-10 bg-white cursor-pointer flex items-center gap-2 rounded-lg hover:bg-white/50">
          <PlayCircleIcon size={24} />
          <span className="text-lg font-semibold">Play</span>
        </button>
        <button className="py-4 px-10 bg-white text-lg font-semibold cursor-pointer rounded-lg flex items-center gap-2  hover:bg-white/50">
          <InfoIcon size={24} />
          <span className="text-lg font-semibold">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
