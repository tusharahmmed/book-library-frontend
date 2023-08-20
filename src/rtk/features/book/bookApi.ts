import {apiSlice} from "../api/ApiSlice";

const bookApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books/add-new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books", "Mybook"],
    }),
    getBooks: builder.query({
      query: (arg) => {
        let url = "/books";
        if (arg?.searchTerm) {
          url = `${url}?searchTerm=${arg.searchTerm}`;
        }
        return url;
      },
      providesTags: ["Books"],
    }),
    getBookDetails: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: (result, error, arg) => [{type: "Book", id: arg}],
      keepUnusedDataFor: 600,
    }),
    editBook: builder.mutation({
      query: ({id, data}) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Books",
        "Mybook",
        {type: "Book", id: arg.id},
      ],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books", "Mybook"],
    }),
    getMyBooks: builder.query({
      query: (id) => `/books/my-books/${id}`,
      providesTags: ["Mybook"],
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
