/* eslint-disable @typescript-eslint/no-explicit-any */
import {MultiSelect} from "@mantine/core";
import {useForm, SubmitHandler} from "react-hook-form";
import {IBook} from "../../types/book";
import {useState, useEffect} from "react";
import {useEditBookMutation} from "../../rtk/features/book/bookApi";
import {useNavigate} from "react-router-dom";

const Form = (data: any) => {
  const [generations, setGenerations]: any = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // initial data
  const {
    _id,
    author: initialAuthor,
    image: initialImage,
    publicationYear: initialYear,
    title: initialTitle,
    genres: initialGenres,
  } = data?.data;

  useEffect(() => {
    setGenerations(initialGenres);
  }, [initialGenres]);

  // RTK
  const [editBook, {isLoading, isError, isSuccess, error}] =
    useEditBookMutation();

  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<IBook>();

  const onSubmit: SubmitHandler<IBook> = (data) => {
    // empty error
    setErrorMessage("");
    // append to data
    data.genres = generations;

    if (data.genres?.length === 0) {
      setErrorMessage("Genres is required");
      return;
    }

    // api call
    editBook({id: _id, data});
  };

  // listen response
  useEffect(() => {
    if (isError && error?.data) {
      swal(error?.data?.message, {
        title: "Opps!",
        icon: "error",
        buttons: false,
      });
    }

    if (isSuccess) {
      navigate("/");
    }
  }, [isError, isSuccess]);

  return (
    <>
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
              defaultValue={initialTitle}
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
              defaultValue={initialAuthor}
              {...register("author", {required: true})}
            />
          </div>
          <div className="mb-4">
            <label className="ml-3 mb-2 inline-block" htmlFor="author">
              Image
            </label>
            <input
              id="image"
              className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
              type="text"
              placeholder="image"
              defaultValue={initialImage}
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
              defaultValue={initialYear}
              {...register("publicationYear", {required: true})}
            />
          </div>

          <div className="inpur-wraper mt-1">
            <button
              type="submit"
              className="bg-[#228BE6] w-full h-[40px] rounded-lg border-0 text-white">
              Update Book
            </button>
          </div>
        </div>
      </form>
      {errorMessage && (
        <div className="mt-4 bg-red-700 text-black-700 p-3 rounded text-center">
          {errorMessage}
        </div>
      )}
    </>
  );
};

export default Form;
