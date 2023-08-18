import {useParams} from "react-router-dom";
import BookCard from "../bookCard/BookCard";
import {BookDetailsPlaceholder} from "../placeholder";
import {useGetBookDetailsQuery} from "../../../rtk/features/book/bookApi";

const BookDetails = () => {
  // get param id
  const {id} = useParams();

  // rtk states
  const {data, isLoading, isError} = useGetBookDetailsQuery(id);

  let content = null;
  if (isLoading) {
    content = <BookDetailsPlaceholder />;
  }
  if (!isLoading && isError) {
    content = "something went wrong";
  }
  if (!isLoading && !isError && !data?._id) {
    content = "No content found";
  }
  if (!isLoading && !isError && data?.data?._id) {
    content = <BookCard data={data.data} />;
  }

  return (
    <div className="book body-font container p-5 mt-0 pb-10 mx-auto xl:w-3/4 bg-[#1B1B1B]">
      {content}
    </div>
  );
};

export default BookDetails;
