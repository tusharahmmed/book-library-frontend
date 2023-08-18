/* eslint-disable @typescript-eslint/no-explicit-any */
import {MultiSelect} from "@mantine/core";
import {useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {IBook} from "../../types/book";
import {useParams} from "react-router-dom";
import {useGetBookDetailsQuery} from "../../rtk/features/book/bookApi";
import Form from "./Form";

const EditBook = () => {
  // get initial data
  const {id} = useParams();
  const {isLoading, isError, data} = useGetBookDetailsQuery(id);

  let content = null;
  if (isLoading) {
    content = "Loading...";
  }
  if (!isLoading && isError) {
    content = "Something went wrong";
  }
  if (!isLoading && !isError && data) {
    content = <Form data={data?.data} />;
  }

  return (
    <div className="mt-10 m-auto text-gray-400 w-[90%] md:w-[60%] lg:w-[40%] px-8 py-4 pb-6 bg-[#27272a] rounded">
      <h1 className="text-3xl text-center mb-4">Edit Book</h1>
      {content}
    </div>
  );
};

export default EditBook;
