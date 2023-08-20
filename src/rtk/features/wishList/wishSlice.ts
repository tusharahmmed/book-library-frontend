import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const wishSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishBookIds: (state, action) => {
      action.payload?.map((book) => {
        const data = {
          _id: book._id,
          status: book.status,
          bookId: book.bookId._id,
        };
        state.books = state.books.concat(data);
      });
    },
    removeWishBookId: (state, action) => {
      state.books = [];

      action.payload?.map((book) => {
        const data = {
          _id: book._id,
          status: book.status,
          bookId: book.bookId._id,
        };
        state.books = state.books.concat(data);
      });
    },
    updateWishListSatus: (state, action) => {
      state.books = [];

      action.payload?.map((book) => {
        const data = {
          _id: book._id,
          status: book.status,
          bookId: book.bookId._id,
        };
        state.books = state.books.concat(data);
      });
    },
  },
});

export const {addWishBookIds, removeWishBookId, updateWishListSatus} =
  wishSlice.actions;
export const wishReducer = wishSlice.reducer;
