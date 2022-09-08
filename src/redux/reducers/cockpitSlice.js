import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 0,
  intervalID: null,
};

export const drawerSlice = createSlice({
  name: "cockpit",
  initialState,
  reducers: {
    addSecond: (state, action) => {
      return { ...state, time: state.time + 1 };
    },
    setInterval: (state, action) => {
      return { ...state, intervalID: action.payload };
    },
  },
});

export const timerStart = async (dispatch) => {
  setInterval(() => {
    // dispatch(addSecond());
    console.log("plus one");
  }, [1000]);
};

export const selectTime = (state) => state.cockpit.time;

export const { addSecond } = drawerSlice.actions;
export default drawerSlice.reducer;
