/* eslint-disable @typescript-eslint/no-explicit-any */

import {Link} from "react-router-dom";

const BookCard = ({data}: any) => {
  // destructure properties
  const {title, author, image, publicationYear, genres, _id} = data || {};

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
            <Link to={`/edit-book/${_id}`}>
              <button className="inline-flex items-center bg-[#228BE6] border-0 py-2 px-4 rounded-xl	 focus:outline-none  text-white mt-4 md:mt-0 mr-2">
                Edit
              </button>
            </Link>
            <button className="inline-flex items-center bg-red-500 border-0 py-2 px-4 rounded-xl	 focus:outline-none  text-white mt-4 md:mt-0 mr-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
