import {apiSlice} from "../api/ApiSlice";
import {userLoggedIn} from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;

          // dispatch loggedin
          dispatch(userLoggedIn(result.data));
        } catch (error) {
          // do nothing
        }
      },
    }),
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;

          // dispatch loggedin
          dispatch(userLoggedIn(result.data));
        } catch (error) {
          // do nothing
        }
      },
    }),
  }),
});

export const {useUserLoginMutation, useUserRegisterMutation} = authApi;
