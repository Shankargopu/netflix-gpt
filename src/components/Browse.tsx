import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  console.log("x");

  return (
    <div>
      <Header />
      {/* 
       MainContainer
        - VideoBackground
        - Video details
       SecondaryContainer
        - MoviesList * n (lot of movies in the list)
          - cards * n (lof of card as movied) 
       
      */}

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
