import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: true,
};

const sideBarSlice = createSlice({
  name: 'side',
  initialState,
  reducers: {
    toggleSwitch: (state) => {
      state.active = !state.active;
    },
  },
});

export const { toggleSwitch } = sideBarSlice.actions;

export default sideBarSlice.reducer;
