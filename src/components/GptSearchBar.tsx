import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../utils/appStore";
import { lang } from "../utils/languageConstan";
import openai from "../utils/openAI";
import { options } from "../utils/constants";
import { addGptSearchMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector(
    (store: RootState) => store.lang.lang
  ) as keyof typeof lang;
 
  const searchText = useRef<HTMLInputElement>(null);

  const searchMovieTmdb = async (movie: string) => {
    const movieResults = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,
      options
    );
    const { results } = await movieResults.json();
    return results;
  };

  const handleGptSearch = async () => {
    console.log(searchText.current?.value);
    const gptPrompt =
      "Act as a movie recommendation system. suggest me the movies for : " +
      searchText.current?.value +
      " give me the first 5 indian telugu movies names only with comma sepearted and do not give me saying here are the movies. just give me movie names. ex : movie1, movie2, movie3,..";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptPrompt }],
      model: "gpt-4o-mini",
    });
    const content = gptResults.choices[0].message.content;
    console.log(content);
    if (!content) {
      alert("something went wrong");
      return;
    }
    const movieArr = content.split(",");
    console.log(movieArr);
    const promiseArr = movieArr.map((movie) => searchMovieTmdb(movie));
    const results = await Promise.all(promiseArr);
    console.log(results);
    dispatch(
      addGptSearchMovies({ gptSearchMovies: results, movieNames: movieArr })
    );
  };

  return (
    <>
      <div className="flex pt-[40%] justify-center md:pt-[10%]">
        <form
          className="w-10/12 md:w-1/2 flex md:gap-3 bg-black"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="border border-black-300 m-2 p-1 md:m-4 md:p-4 focus:outline-none ring-0 md:rounded-lg w-full bg-white text-[10px] md:text-[15px]"
            type="text"
            placeholder={lang[language].gptSearchPlaceHolder}
            ref={searchText}
          />
          <button
            className="p-2 md:px-6 md:py-2 w-2/12 text-[10px] md:text-[15px] m-2 md:m-4 bg-red-500 cursor-pointer rounded-sm md:rounded-lg hover:bg-red-400 text-white"
            onClick={handleGptSearch}
            type="submit"
          >
            {lang[language].search}
          </button>
        </form>
      </div>
      {/* {movieNames && <GptSuggestions />} */}
    </>
  );
};

export default GptSearchBar;
