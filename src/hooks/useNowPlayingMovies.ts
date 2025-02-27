import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { RootState } from "../utils/appStore";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies
  );
  useEffect(() => {
    // console.log(movies.length)
    if(!movies) getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const moviesList = await res.json();
    dispatch(addNowPlayingMovies(moviesList.results));
  };
};

export default useNowPlayingMovies;
