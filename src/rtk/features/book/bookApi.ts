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
        if (arg?.searchTerm) {
          url = `${url}?searchTerm=${arg.searchTerm}`;
        }
        return url;
      },
    }),
    getBookDetails: builder.query({
      query: (id) => `/books/${id}`,
    }),
    editBook: builder.mutation({
      query: ({id, data}) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
    }),
    getMyBooks: builder.query({
      query: (id) => `/books/my-books/${id}`,
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetBooksQuery,
  useGetBookDetailsQuery,
  useEditBookMutation,
  useDeleteBookMutation,
  useGetMyBooksQuery,
} = bookApiSlice;
export const bookSliceReducer = bookApiSlice.reducer;
