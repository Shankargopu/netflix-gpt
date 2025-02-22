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
            key={"Now Playing Movies"}
            title="Now Playing Movies"
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            key={"Popular"}
            title="Popular"
            movies={movies.popularMovies}
          />
          <MovieList
            key="Top Rated"
            title="Top Rated"
            movies={movies.topRatedMovies}
          />
          <MovieList
            key="Upcoming Movies"
            title="Upcoming Movies"
            movies={movies.upcomingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
