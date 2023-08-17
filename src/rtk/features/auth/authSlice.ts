import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      // update local storage
      localStorage.setItem(
        "accessToken",
        JSON.stringify(action.payload?.data?.accessToken)
      );

      // update state
      state.accessToken = action.payload?.data?.accessToken;
      state.user = action.payload?.data?.user;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

export const {userLoggedIn, userLoggedOut} = authSlice.actions;

export const authSliceReducer = authSlice.reducer;
