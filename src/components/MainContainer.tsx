import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () => {
  // useNowPlayingMovies();
  const movies = useSelector(
    (store: RootState) => store.movies?.nowPlayingMovies
  );
  if (!movies) return;
  const mainMovie = movies[2];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="pt-[35%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
