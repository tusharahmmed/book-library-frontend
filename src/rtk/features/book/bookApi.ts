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
    getBooks: builder.query({
      query: (arg) => {
        let url = "/books";
        if (arg?.q) {
          url = `${url}?searchTerm=${arg.q}`;
        }
        return url;
      },
    }),
  }),
});

export const {useAddBookMutation, useGetBooksQuery} = bookApiSlice;
export const bookSliceReducer = bookApiSlice.reducer;
