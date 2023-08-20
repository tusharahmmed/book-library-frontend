import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "../features/api/ApiSlice";
import {authSliceReducer} from "../features/auth/authSlice";
import {wishReducer} from "../features/wishList/wishSlice";
import {bookReducer} from "../features/book/bookSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    book: bookReducer,
    wishList: wishReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
