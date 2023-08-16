import {useParams} from "react-router-dom";
import BookCard from "../bookCard/BookCard";
import {BookDetailsPlaceholder} from "../placeholder";

// import {useMovieDetailsQuery} from "../../../../rtk/features/apiSlice/ApiSlice";

const BookDetails = () => {
  // get param id
  const {id} = useParams();

  // rtk states
  // const {data, isLoading, isError} = useMovieDetailsQuery(id);
  const {data, isLoading, isError} = {
    data: null,
    isLoading: null,
    isError: null,
  };

  // destructure properties
  const {download_link, movie_info, screenshots} = data || {};

  const {full_name, released, duration, language, size, quality, format} =
    movie_info || {};

  // download handler
  const handleDownloadLink = () => {
    window.open(download_link);
  };

  let content = "";
  if (isLoading) {
    content = <BookDetailsPlaceholder />;
  }
  if (!isLoading && isError) {
    content = "something went wrong";
  }
  if (!isLoading && !isError && !data?._id) {
    content = "No content found";
  }
  if (!isLoading && !isError && data?._id) {
    content = (
      <div className="movies body-font container p-5 mt-14 pb-10 mx-auto xl:w-3/4 bg-[#1B1B1B]">
        <BookCard movie={data} />

        <div className="bg-[#1B1B1B]">
          <div className="mt-[20px]">
            <h2 className="text-2xl text-[#008080]">Movie Info:</h2>
            <ul className="list-square text-gray-500 mt-[1.5em] mb-[1.571em] ml-[1.9em]">
              <li>Full Name: {full_name}</li>
              <li>
                <span>Released:</span> {released}
              </li>
              <li>
                <span>Duration:</span> {duration}
              </li>
              <li>
                <span>Language:</span> {language}
              </li>
              <li>
                <span>Size:</span> {size}
              </li>
              <li>
                <span>Quality:</span> {quality}
              </li>
              <li>
                <span>Format:</span> {format}
              </li>
            </ul>
          </div>

          {screenshots?.length > 0 && (
            <div className="mt-[20px]">
              <h2 className="text-2xl text-[#008080] mb-[20px]">
                Screenshots:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {screenshots.map((img) => (
                  <img key={img} className=" w-full" src={img} alt="" />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <button
            onClick={handleDownloadLink}
            className="bg-[#e0e0e0] text-black px-7 py-3 rounded-lg font-bold hover:bg-gray-300 duration-200 text-xl">
            Download Link
          </button>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default BookDetails;
