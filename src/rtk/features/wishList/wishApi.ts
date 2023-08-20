import {apiSlice} from "../api/ApiSlice";
import {
  addWishBookIds,
  removeWishBookId,
  updateWishListSatus,
} from "./wishSlice";

const wishApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addtoWishList: builder.mutation({
      query: (data) => ({
        url: "/wish-lists/add-new",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Wishlist"],
    }),
    getWishlist: builder.query({
      query: (id) => `/wish-lists/${id}`,
      providesTags: ["Wishlist"],
      async onQueryStarted(arg, {queryFulfilled, dispatch}) {
        try {
          const result = await queryFulfilled;

          // dispatch loggedin
          dispatch(addWishBookIds(result.data?.data?.books));
        } catch (error) {
          // do nothing
        }
      },
    }),
    removeFromWishList: builder.mutation({
      query: ({userId, data}) => ({
        url: `/wish-lists/remove/${userId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Wishlist", "Book"],
      async onQueryStarted(arg, {queryFulfilled, dispatch}) {
        try {
          const result = await queryFulfilled;

          // dispatch loggedin
          dispatch(removeWishBookId(result.data?.data?.books));
        } catch (error) {
          // do nothing
        }
      },
    }),
    updateWishList: builder.mutation({
      query: ({userId, data}) => ({
        url: `/wish-lists/${userId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Books", "Book", "Wishlist"],
      async onQueryStarted(arg, {queryFulfilled, dispatch}) {
        try {
          const result = await queryFulfilled;

          // dispatch loggedin
          dispatch(updateWishListSatus(result.data?.data?.books));
        } catch (error) {
          // do nothing
        }
      },
    }),
  }),
});

export const {
  useAddtoWishListMutation,
  useGetWishlistQuery,
  useRemoveFromWishListMutation,
  useUpdateWishListMutation,
} = wishApiSlice;
