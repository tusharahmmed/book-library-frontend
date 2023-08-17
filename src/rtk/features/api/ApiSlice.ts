/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {config} from "../../../config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: config.base_url,
    prepareHeaders: async (headers) => {
      // add local access token
      const localToken: any = localStorage.getItem("accessToken");

      if (localToken && localToken !== "undefined") {
        headers.set("Authorization", JSON.parse(localToken));
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
