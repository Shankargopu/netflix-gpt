import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { RootState } from "../utils/appStore";

const useUpcomingMovies = () => {
  const movies = useSelector((store: RootState) => store.movies.upcomingMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movies) getUpcomingMovies();
  }, []);
  const getUpcomingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1'",
      options
    );
    const moviesList = await res.json();
    dispatch(addUpcomingMovies(moviesList.results));
  };
};

export default useUpcomingMovies;
