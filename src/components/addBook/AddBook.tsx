/* eslint-disable @typescript-eslint/no-explicit-any */
import {MultiSelect} from "@mantine/core";
import {useForm, SubmitHandler} from "react-hook-form";
import {useEffect, useState} from "react";
import swal from "sweetalert";
import {IBook} from "../../types/book";
import {useAppSelector} from "../../rtk/hooks/hook";
import {useAddBookMutation} from "../../rtk/features/book/bookApi";

const AddBook = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [generations, setGenerations]: any = useState([]);
  // get user
  const userId = useAppSelector((state) => state.auth?.user?._id);
  const authorName = useAppSelector((state) => state.auth?.user?.fullName);

  // rtk
  const [addBook, {isLoading, error, isError, isSuccess}] =
    useAddBookMutation();

  // hook form
  const {
    register,
    handleSubmit,
    reset,
    // formState: {errors},
  } = useForm<IBook>();
  const onSubmit: SubmitHandler<IBook> = (data) => {
    // append to data
    data.genres = generations;
    data.authorId = userId;

    if (data.genres?.length === 0) {
      alert("genre is required");
      return;
    }

    // api call
    addBook(data);
  };

  // listen response
  useEffect(() => {
    setErrorMessage("");

    if (!isLoading && isError) {
      setErrorMessage(error?.data?.message);
    }

    // if success
    if (isSuccess) {
      reset();
      setGenerations([]);
      swal("Successfully add new book", {
        title: "Success",
        icon: "success",
        buttons: false,
        timer: 1000,
      });
    }
  }, [isSuccess, error]);

  return (
    <div className="mt-10 m-auto text-gray-400 w-[90%] md:w-[60%] lg:w-[40%] px-8 py-4 pb-6 bg-[#27272a] rounded">
      <h1 className="text-3xl text-center mb-4">Add A Book</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <div className="mb-4">
            <label className="ml-3 mb-2 inline-block" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
              type="text"
              placeholder="Title"
              {...register("title", {required: true})}
            />
          </div>
          <div className="mb-4">
            <label className="ml-3 mb-2 inline-block" htmlFor="author">
              Author
            </label>
            <input
              id="author"
              className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
              type="text"
              placeholder="Authro"
              defaultValue={authorName}
              {...register("author", {required: true})}
            />
          </div>

          <div className="mb-4">
            <label className="ml-3 mb-2 inline-block" htmlFor="image">
              Image
            </label>
            <input
              id="image"
              className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
              type="text"
              placeholder="Image"
              {...register("image")}
            />
          </div>

          <div className="mb-4">
            <label className="ml-3 mb-2 inline-block">Genre</label>
            <MultiSelect
              //   style={{padding: 0}}
              //   variant="unstyled"
              value={generations}
              onChange={setGenerations}
              className="multi-select w-full h-[40px] rounded-lg border-1 "
              rightSection={""}
              rightSectionWidth={0}
              maxDropdownHeight={150}
              size="md"
              radius="md"
              // className="input-bg w-full h-[40px] rounded-lg px-4 border-0"
              data={["Fiction", "Novel", "Mystery", "History", "Romance"]}
              placeholder="generations"
              searchable
              nothingFound="Nothing found"
            />
          </div>
          <div className="mb-4">
            <label className="ml-3 mb-2 inline-block" htmlFor="year">
              Publication Year
            </label>
            <input
              id="year"
              className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
              type="text"
              placeholder="Year"
              {...register("publicationYear", {required: true})}
            />
          </div>

          <div className="inpur-wraper mt-1">
            <button
              className="bg-[#228BE6] w-full h-[40px] rounded-lg border-0 text-white"
              // onClick={() => refSubmitButtom?.current?.click()}
            >
              Add Book
            </button>
          </div>
        </div>
      </form>
      {errorMessage && (
        <div className="mt-4 bg-red-700 text-black-700 p-3 rounded text-center">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default AddBook;
