import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";

const SecondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movies);
  return (
    movies &&
    movies.nowPlayingMovies &&
    movies.popularMovies &&
    movies.upcomingMovies &&
    movies.topRatedMovies && (
      <div className="bg-black">
        {/* 
      MovieList - Popular
        MovieCards * n
      MovieList - Now Playing
      MovieList - Trending
      MovieList - Horror 
      
      */}
        <div className="-mt-64 relative z-10">
          <MovieList
            title="Now Playing Movies"
            movies={movies.nowPlayingMovies}
          />
          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Top Rated" movies={movies.topRatedMovies} />
          <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
