import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getPopularMovies();
  }, []);
  const getPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      options
    );
    const moviesList = await res.json();
    dispatch(addPopularMovies(moviesList.results));
  };
};

export default usePopularMovies;
