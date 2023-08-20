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
      const removedBookId = action.payload[0]?.bookId?._id;
      state.books = state.books.filter(
        (item) => item?.bookID !== removedBookId
      );
    },
    updateWishListSatus: (state, action) => {
      const updatedData = action.payload;

      state.books = state.books.map((obj) => {
        if (obj._id === updatedData?.arg?._id) {
          return {...obj, status: updatedData?.arg?.status};
        }

        return obj;
      });
    },
  },
});

export const {addWishBookIds, removeWishBookId, updateWishListSatus} =
  wishSlice.actions;
export const wishReducer = wishSlice.reducer;
