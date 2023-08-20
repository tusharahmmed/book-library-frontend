import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const {setSearchTerm} = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
