import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 0,
};

export const drawerSlice = createSlice({
  name: "cockpit",
  initialState,
  reducers: {
    addSecond: (state, action) => {
      return {
        time: state.time + 1,
      };
    },
  },
});

export const selectTime = (state) => state.cockpit.time;

export const { addSecond } = drawerSlice.actions;
export default drawerSlice.reducer;
