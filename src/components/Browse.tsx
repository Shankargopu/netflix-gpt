import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { useEffect } from "react";

const Browse = () => {

  const { active } = useSelector((store: RootState) => store.gpt);

  useEffect(()=>{

    return ()=>{
      console.log("unmouting")
    }
  },[])

  useNowPlayingMovies()
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {active ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer /> <SecondaryContainer />
        </>
      )}
      {/* 
       MainContainer
        - VideoBackground
        - Video details
       SecondaryContainer
        - MoviesList * n (lot of movies in the list)
          - cards * n (lof of card as movied) 
       
      */}
    </div>
  );
};

export default Browse;
