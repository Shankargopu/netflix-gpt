import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { gptSearchMovies, movieNames } = useSelector(
    (store: RootState) => store.gpt
  );
  console.log(gptSearchMovies, movieNames);
  return (
    <div className="text-white mt-10 p-10 bg-black/50">
      <div>
        {movieNames &&
          movieNames.map(
            (movie, index) =>
              movie &&
              gptSearchMovies[index] && gptSearchMovies[index][0].poster_path && (
                <MovieList
                  key={movie}
                  title={movie}
                  movies={gptSearchMovies[index]}
                />
              )
          )}
      </div>
    </div>
  );
};

export default GptSuggestions;
