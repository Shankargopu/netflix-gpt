import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { RootState } from "../utils/appStore";

const usePopularMovies = () => {
  const movies = useSelector((store: RootState) => store.movies.popularMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movies) getPopularMovies();
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
