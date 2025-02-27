import { useEffect } from "react";
import { options } from "../utils/constants";
import { addTrailerData } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

interface video {
  id: string;
  key: string;
  type: string;
}

const useMoviesVideos = (id: string) => {
  const dispatch = useDispatch();
  const trailerData = useSelector(
    (store: RootState) => store.movies.trailerData
  );
  useEffect(() => {
    // console.log(movies.length)
    if (!trailerData) getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    await fetch;
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
