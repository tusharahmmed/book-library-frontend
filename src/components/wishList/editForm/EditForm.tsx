/* eslint-disable @typescript-eslint/no-explicit-any */
import {Select} from "@mantine/core";
import {useForm} from "react-hook-form";
import {useAppSelector} from "../../../rtk/hooks/hook";
import {useEffect, useState} from "react";
import {
  useAddtoWishListMutation,
  useUpdateWishListMutation,
} from "../../../rtk/features/wishList/wishApi";
import swal from "sweetalert";

interface editProp {
  data: any;
  close: any;
  title: string;
}

const EditForm: React.FC<editProp> = ({data: bookData, close, title}) => {
  const [select, setSelect] = useState(bookData?.status);
  const [errorMessage, setErrorMessage] = useState("");

  // get user
  const userId = useAppSelector((state) => state.auth?.user?._id);

  // rtk
  const [updateWishList, {isLoading, isSuccess, error}] =
    useUpdateWishListMutation();

  // hook form
  const {handleSubmit, reset} = useForm();
  const onSubmit = (data: any) => {
    setErrorMessage("");
    // append to data
    data._id = bookData?._id;
    data.status = select;
    data.bookId = bookData?.bookId;
    // validation
    if (!select) {
      setErrorMessage("Status is requried");
      return;
    }

    // api call
    updateWishList({userId, data});
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
            value={title}
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
            Update
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

export default EditForm;
