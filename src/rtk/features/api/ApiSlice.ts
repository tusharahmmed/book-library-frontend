/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import {config} from "../../../config";
import {SerializedError} from "@reduxjs/toolkit";

type IErrorMessage = {
  path: string;
  message: string;
};

// ("FetchBaseQueryError | SerializedError");

type CustomErrorType = {
  success: boolean;
  message: string;
  errorMessages: IErrorMessage[];
  stack: string;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: config.base_url,
  }),
  tagTypes: [],
  endpoints: (builder) => ({}),
});
