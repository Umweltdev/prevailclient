import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  location: "",
  minPrice: "",
  maxPrice: "",
  minBed: "",
  maxBed: "",
  minCar: "",
  maxCar: "",
  type: "",
  sort: "newest"
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setMinBed: (state, action) => {
      state.minBed = action.payload;
    },
    setMaxBed: (state, action) => {
      state.maxBed = action.payload;
    },
    setMinCar: (state, action) => {
      state.minCar = action.payload;
    },
    setMaxCar: (state, action) => {
      state.maxCar = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    resetState: () => initialState,
  },
});

export const {
  setLocation,
  setMinPrice,
  setMaxPrice,
  setMinBed,
  setMaxBed,
  setMinCar,
  setMaxCar,
  setType,
  resetState,
  setSort
} = filterSlice.actions;

export default filterSlice.reducer;
