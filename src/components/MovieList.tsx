import React from "react";
import MovieCard from "./MovieCard";
import { image_path } from "../utils/constants";

const MovieList = ({
  title,
  movies,
}: {
  title: string;
  movies: [{ poster_path: string }];
}) => {
  return (
    <div className="py-3 px-5 overflow-hidden text-white">
      <div>
        <h1 className="text-2xl ml-4">{title}</h1>
        <div className="flex overflow-x-scroll overflow-y-hidden gap-1">
          {movies &&
            movies.length &&
            movies.map((movie) => (
              <div>
                <MovieCard image={image_path + movie.poster_path} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
