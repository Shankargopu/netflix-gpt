import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import useMoviesVideos from "../hooks/useMoviesVideos";

const VideoBackground = ({ id }: { id: string }) => {
  const trailerData: { key: string } | null = useSelector(
    (store: RootState) => store.movies.trailerData
  ) as { key: string } | null;
  useMoviesVideos(id);

  return (
    <div className="-mt-28 bg-gradient-to-r aspect-video">
      <div className="absolute bg-gradient-to-r from-black/15 inset-0"></div>
      {trailerData && (
        // <div className="w-full aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailerData.key}?&autoplay=1&mute=1&modestbranding=0&showinfo=0&controls=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        // </div>
      )}
    </div>
  );
};

export default VideoBackground;
