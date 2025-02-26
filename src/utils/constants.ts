export const NETFLIX_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};

export const image_path = "https://image.tmdb.org/t/p/original/";

export const supportedLanguages = ["english", "hindi", "telugu"];

export const OPEN_AI_GPT_KEY = import.meta.env.VITE_OPEN_AI_KEY;

