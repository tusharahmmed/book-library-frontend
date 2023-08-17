import {apiSlice} from "../api/ApiSlice";

const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books/add-new",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useAddBookMutation} = bookApiSlice;
export const bookSliceReducer = bookApiSlice.reducer;
