import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { lang } from "../utils/languageConstan";

const GptSearchBar = () => {
  const language = useSelector(
    (store: RootState) => store.lang.lang
  ) as keyof typeof lang;
  return (
    <div className="flex pt-[10%] justify-center">
      <form className="w-1/2 flex gap-3 bg-black">
        <input
          className="border border-black-300 m-4 p-4 focus:outline-none ring-0 rounded-lg w-10/12 bg-white"
          type="text"
          placeholder={lang[language].gptSearchPlaceHolder}
        />
        <button className="px-6 py-2 w-2/12 m-4 bg-red-500 cursor-pointer rounded-lg hover:bg-red-400 text-white">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
