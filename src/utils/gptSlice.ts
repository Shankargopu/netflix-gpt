import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { active: false, gptSearchMovies: null, movieNames: null },
  reducers: {
    toggleGpt: (state) => {
      state.active = !state.active;
    },
    addGptSearchMovies: (state, action) => {
      const { gptSearchMovies, movieNames } = action.payload;
      state.gptSearchMovies = gptSearchMovies;
      state.movieNames = movieNames;
    },
  },
});
export const { toggleGpt, addGptSearchMovies } = gptSlice.actions;
export default gptSlice.reducer;
