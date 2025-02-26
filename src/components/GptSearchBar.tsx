import React, { useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../utils/appStore";
import { lang } from "../utils/languageConstan";
import openai from "../utils/openAI";
import { options } from "../utils/constants";
import { addGptSearchMovies } from "../utils/gptSlice";
import GptSuggestions from "./GptSuggestions";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector(
    (store: RootState) => store.lang.lang
  ) as keyof typeof lang;
  const { movieNames } = useSelector((store: RootState) => store.gpt);
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
      <div className="flex pt-[10%] justify-center">
        <form
          className="w-1/2 flex gap-3 bg-black"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="border border-black-300 m-4 p-4 focus:outline-none ring-0 rounded-lg w-10/12 bg-white"
            type="text"
            placeholder={lang[language].gptSearchPlaceHolder}
            ref={searchText}
          />
          <button
            className="px-6 py-2 w-2/12 m-4 bg-red-500 cursor-pointer rounded-lg hover:bg-red-400 text-white"
            onClick={handleGptSearch}
            type="submit"
          >
            {lang[language].search}
          </button>
        </form>
      </div>
      {movieNames && <GptSuggestions />}
    </>
  );
};

export default GptSearchBar;
