/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import swal from "sweetalert";
import {useDeleteBookMutation} from "../../../rtk/features/book/bookApi";
import {useAppSelector} from "../../../rtk/hooks/hook";
import WishListModal from "../../wishList/modal/WishListModal";
import {
  useGetWishlistQuery,
  useRemoveFromWishListMutation,
} from "../../../rtk/features/wishList/wishApi";

const BookCard = ({data}: any) => {
  const navigate = useNavigate();
  const userId = useAppSelector((state) => state?.auth?.user?._id);
  const wishListBooks: string[] = useAppSelector(
    (state) => state?.wishList?.books
  );

  // destructure properties
  const {title, author, image, publicationYear, genres, _id, authorId} =
    data || {};

  // rtk

  // wishlist
  const {data: wishListData} = useGetWishlistQuery(userId);
  const wishListDetails = wishListBooks?.find((item) => item?.bookId === _id);

  const [
    removeFromWishList,
    {isLoading: wishLoading, error: wishEroor, isSuccess: wishSuccess},
  ] = useRemoveFromWishListMutation();

  const handleRemoveWishlist = (userId, wishListID) => {
    swal("You want to remove this book", {
      title: "Are you sure?",
      icon: "warning",
    }).then((willRemove) => {
      if (willRemove) {
        // call delete api
        const data = {_id: wishListID};
        removeFromWishList({userId, data});
      } else {
        // if cancel
      }
    });
  };

  // listen response
  useEffect(() => {
    // check erro
    if (!wishLoading && wishEroor) {
      swal(`${wishEroor?.data?.message}`, {
        title: "Opps!",
        icon: "error",
      });
    }

    // check success
    if (!wishLoading && wishSuccess?.data) {
      swal("Successfully removed from wishlist", {
        title: "Success",
        icon: "success",
        buttons: false,
        timer: 1000,
      });
    }
  }, [wishEroor, wishSuccess, wishLoading]);

  // delete book
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
              <>
                {wishListDetails ? (
                  <button
                    onClick={() =>
                      handleRemoveWishlist(userId, wishListDetails?._id)
                    }
                    className="inline-flex items-center bg-[#228BE6] border-0 py-2 px-4 rounded-xl	 focus:outline-none  text-white mt-4 md:mt-0 mr-2">
                    Remove from Wishlist
                  </button>
                ) : (
                  <>
                    <WishListModal
                      form="add"
                      buttonText="Add to wishList"
                      bookData={data}
                    />
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
