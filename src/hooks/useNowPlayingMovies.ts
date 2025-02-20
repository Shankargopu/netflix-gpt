import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    
    getNowPlayingMovies();
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
