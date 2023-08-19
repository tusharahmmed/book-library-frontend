import {apiSlice} from "../api/ApiSlice";

const wishApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addtoWishList: builder.mutation({
      query: (data) => ({
        url: "/wish-lists/add-new",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useAddtoWishListMutation} = wishApiSlice;
