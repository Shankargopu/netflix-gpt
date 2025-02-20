import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerData: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerData: (state, action) => {
      state.trailerData = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addTrailerData } = moviesSlice.actions;
export default moviesSlice.reducer;
