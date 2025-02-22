import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { NETFLIX_IMG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div
        className="absolute h-screen w-screen -z-10"
        // style={{
        //   backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg")`,
        // }}
      >
        <div className="absolute bg-gradient-to-l from-black/80 top-0 w-screen h-screen"></div>
        <img
          className="w-screen max-h-screen bg-center bg-cover bg-blend-multiply"
          src={NETFLIX_IMG}
          alt="image"
        />
      </div>

      <GptSearchBar />
      {/* <GptSuggestions />   */}
    </div>
  );
};

export default GptSearch;
