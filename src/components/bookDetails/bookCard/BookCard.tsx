/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import {useDeleteBookMutation} from "../../../rtk/features/book/bookApi";
import {useAppSelector} from "../../../rtk/hooks/hook";

const BookCard = ({data}: any) => {
  const navigate = useNavigate();
  const userId = useAppSelector((state) => state?.auth?.user?._id);

  // destructure properties
  const {title, author, image, publicationYear, genres, _id, authorId} =
    data || {};

  // rtk
  const [
    deleteBook,
    {isLoading, data: successData, isError, error, isSuccess},
  ] = useDeleteBookMutation();

  // handel delete
  const handleBookDelete = (_id: string) => {
    swal("You want to delete this book", {
      title: "Are you sure?",
      icon: "warning",
    }).then((willDelete) => {
      if (willDelete) {
        // call delete api
        deleteBook(_id);
      } else {
        // if cancel
      }
    });
  };

  // listen response
  useEffect(() => {
    // check erro
    if (isError && error?.data) {
      swal(`${error?.data?.message}`, {
        title: "Opps!",
        icon: "error",
      });
    }

    // check success
    if (isSuccess && successData?.data) {
      // redirect after delete
      navigate("/");
    }
  }, [isError, isSuccess]);

  return (
    <div className="book body-font container p-5 mt-0 pb-10 mx-auto xl:w-3/4 bg-[#1B1B1B]">
      <div className="flex flex flex-col md:flex-row p-5 text-gray-300 shadow-xl bg-[#222222] border-[1px] border-[#080808]">
        <div className="w-full md:w-[200px]">
          <img
            className="max-w-full md:max-w-[200px] block"
            src={image}
            alt={title}
          />
        </div>

        <div className="ml-0 md:ml-5 pt-3 md:pt-0">
          <div className="pb-[10px] mb-[10px] border-b-[1px] border-[#2f2f2f]">
            <h1 className="text-2xl font-bold">
              {title}{" "}
              <span className="text-base font-medium">({publicationYear})</span>
            </h1>
            <p className="text-sm">{author}</p>
          </div>

          <div className="">
            <p>Author: {author}</p>
            <p>Published In: {publicationYear}</p>
            <p>
              Genre:{" "}
              {genres?.map((item: any) => (
                <span key={item}>{`${item} `}</span>
              ))}
            </p>
          </div>

          <div className="mt-4">
            {userId === authorId?._id ? (
              <>
                <Link to={`/edit-book/${_id}`}>
                  <button className="inline-flex items-center bg-[#228BE6] border-0 py-2 px-4 rounded-xl	 focus:outline-none  text-white mt-4 md:mt-0 mr-2">
                    Edit
                  </button>
                </Link>
                <button
                  disabled={isLoading}
                  onClick={() => handleBookDelete(_id)}
                  className="inline-flex items-center bg-red-500 border-0 py-2 px-4 rounded-xl	 focus:outline-none  text-white mt-4 md:mt-0 mr-2">
                  Delete
                </button>
              </>
            ) : (
              <button
                disabled={isLoading}
                // onClick={() => handleBookDelete(_id)}
                className="inline-flex items-center bg-red-500 border-0 py-2 px-4 rounded-xl	 focus:outline-none  text-white mt-4 md:mt-0 mr-2">
                Add to wishList
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
