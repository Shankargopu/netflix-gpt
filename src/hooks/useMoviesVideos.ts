import { useEffect } from "react";
import { options } from "../utils/constants";
import { addTrailerData } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

interface video {
  id: string;
  key: string;
  type: string;
}

const useMoviesVideos = (id: string) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    await fetch
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    const videos = await data.json();
    const filteredData = videos.results.filter(
      (video: video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : videos.results[0];

    dispatch(addTrailerData(trailer));
  };
};

export default useMoviesVideos;
