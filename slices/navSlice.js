import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  trevelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestinaton: (state, action) => {
      state.destination = action.payload;
    },
    setTrevelTimeInformation: (state, action) => {
      state.trevelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestinaton, setTrevelTimeInformation } =
  navSlice.actions;

//Selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDesctination = (state) => state.nav.destination;
export const selectTrevelTimeInformation = (state) =>
  state.nav.trevelTimeInformation;

export default navSlice.reducer;
