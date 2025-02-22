import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: { active: false },
  reducers: {
    toggleGpt: (state) => {
      state.active = !state.active;
    },
  },
});
export const { toggleGpt } = gptSlice.actions;
export default gptSlice.reducer;
