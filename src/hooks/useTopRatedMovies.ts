import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { RootState } from "../utils/appStore";

const useTopRatedMovies = () => {
  const movies = useSelector((store: RootState) => store.movies.topRatedMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!movies) getTopRatedMovies();
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
