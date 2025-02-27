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
    <div className="pt-[15%] md:pt-[25%] px-4 md:px-12 text-wrap absolute">
      <h2 className="text-sm  md:text-3xl font-bold text-white">{title}</h2>
      <p className="hidden md:block max-w-2/4 w-1/4 py-6 text-sm text-white">{overview}</p>
      <div className="py-1 flex items-center gap-4">
        <button className="text-[10px] py-2 px-4 md:py-4 md:px-10 bg-white cursor-pointer flex items-center gap-1 md:gap-2 rounded-lg hover:bg-white/50">
          <PlayCircleIcon className="w-3 md:w-6"/>
          <span className="text-[10px] md:text-lg font-semibold">Play</span>
        </button>
        <button className="hidden md:flex py-4 px-10 bg-white text-lg font-semibold cursor-pointer rounded-lg flex items-center gap-2  hover:bg-white/50">
          <InfoIcon size={24} />
          <span className="text-lg font-semibold">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
