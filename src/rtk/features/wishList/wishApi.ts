import {apiSlice} from "../api/ApiSlice";
import {addWishBookIds, removeWishBookId} from "./wishSlice";

const wishApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addtoWishList: builder.mutation({
      query: (data) => ({
        url: "/wish-lists/add-new",
        method: "POST",
        body: data,
      }),
    }),
    getWishlist: builder.query({
      query: (id) => `/wish-lists/${id}`,
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
  }),
});

export const {
  useAddtoWishListMutation,
  useGetWishlistQuery,
  useRemoveFromWishListMutation,
} = wishApiSlice;
