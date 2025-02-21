import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUpcomingMovies();
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
