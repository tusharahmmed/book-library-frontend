/* eslint-disable @typescript-eslint/no-explicit-any */
import {Select} from "@mantine/core";
import {useForm} from "react-hook-form";
import {useAppSelector} from "../../../rtk/hooks/hook";
import {IBook} from "../../../types/book";
import {useEffect, useState} from "react";
import {useAddtoWishListMutation} from "../../../rtk/features/wishList/wishApi";
import swal from "sweetalert";

interface addProp {
  data: IBook;
  close: any;
}

const AddFrom: React.FC<addProp> = ({data: bookData, close}) => {
  const [select, setSelect] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // get user
  const userId = useAppSelector((state) => state.auth?.user?._id);

  // rtk
  const [addtoWishList, {isLoading, isSuccess, error}] =
    useAddtoWishListMutation();

  // hook form
  const {handleSubmit, reset} = useForm();
  const onSubmit = (data: any) => {
    setErrorMessage("");
    // append to data
    data.userId = userId;
    data.books = [
      {
        bookId: bookData?._id,
        status: select,
      },
    ];
    // validation
    if (!select) {
      setErrorMessage("Status is requried");
      return;
    }

    // api call
    addtoWishList(data);
  };

  // listen api response
  useEffect(() => {
    // if success
    if (!isLoading && isSuccess) {
      reset();
      close();
      swal("Successfully add to wishList", {
        title: "Success",
        icon: "success",
        buttons: false,
        timer: 1000,
      });
    }
    if (!isLoading && error) {
      reset();
      close();
      swal(error?.data?.message, {
        title: "Error",
        icon: "error",
        buttons: false,
        timer: 1500,
      });
    }
  }, [isSuccess, isLoading, error]);

  return (
    <>
      <form className="text-white" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="ml-3 mb-2 inline-block" htmlFor="title">
            Book
          </label>
          <input
            id="title"
            readOnly
            className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
            type="text"
            placeholder="Title"
            value={bookData?.title}
          />
        </div>
        <div className="mb-4">
          <label className="ml-3 mb-2 inline-block" htmlFor="title">
            Title
          </label>
          <Select
            dropdownPosition="flip"
            size="md"
            radius="md"
            value={select}
            onChange={(value) => setSelect(value as string)}
            placeholder="Pick one"
            className="w-full h-[40px] rounded-lg border-1"
            data={[
              {value: "wishlist", label: "Wishlist"},
              {value: "currently reading", label: "Currently reading"},
            ]}
          />
        </div>
        <div className="inpur-wraper mt-1">
          <button className="bg-[#228BE6] w-full h-[40px] rounded-lg border-0 text-white">
            Add Book
          </button>
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

export default AddFrom;
