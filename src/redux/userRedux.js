import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
    registerFlag : false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state,action) => {
      state.isFetching = false;
      state.error = true;
      state.errorMessage = action.payload
    },
    logout: (state) => {
      state.currentUser = null;
    },
    registerStart: (state) => {
      state.isRegistering = true;
    },
    registerSuccess: (state) => {
      state.isRegistering = false;
      state.registerFlag = true
      state.error = false;
    },
    registerFailure: (state) => {
      state.isRegistering = false;
      state.error = true;
    },
    resetState: (state) => {
      return {
        currentUser: null,
        isFetching: false,
        error: false,
        registerFlag: false
      };
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, registerStart, registerSuccess, registerFailure, resetState } = userSlice.actions;
export default userSlice.reducer;