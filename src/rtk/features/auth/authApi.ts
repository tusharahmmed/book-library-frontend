/* eslint-disable no-shadow-restricted-names */
import {apiSlice} from "../api/ApiSlice";
import {userLoggedIn, userLoggedOut} from "./authSlice";

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
    getAuth: builder.query({
      query: () => ({
        url: "/auth",
        method: "GET",
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
    userLogout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, {dispatch, queryFulfilled}) {
        try {
          const result = await queryFulfilled;

          // dispatch loggedin
          dispatch(userLoggedOut());
        } catch (error) {
          // do nothing
        }
      },
    }),
  }),
});

export const {
  useUserLoginMutation,
  useUserRegisterMutation,
  useGetAuthQuery,
  useUserLogoutMutation,
} = authApi;
