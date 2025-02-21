import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopRatedMovies();
  }, []);
  const getTopRatedMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      options
    );
    const moviesList = await res.json();
    dispatch(addTopRatedMovies(moviesList.results));
  };
};

export default useTopRatedMovies;
