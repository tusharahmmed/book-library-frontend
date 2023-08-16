/* eslint-disable @typescript-eslint/no-explicit-any */

import star from "../../../../img/imdb-star.png";

const BookCard = ({movie}: any) => {
  // destructure properties
  const {
    sub_title,
    name,
    img,
    description,
    director,
    creator,
    actors,
    movie_info: {released, full_name},
  } = movie || {};

  return (
    <div className="flex flex flex-col md:flex-row p-5 text-gray-300 shadow-xl bg-[#222222] border-[1px] border-[#080808]">
      <div className="w-full md:w-[200px]">
        <img
          className="max-w-full md:max-w-[200px] block"
          src={img}
          alt={name}
        />
      </div>

      <div className="ml-0 md:ml-5 pt-3 md:pt-0">
        <div className="pb-[10px] mb-[10px] border-b-[1px] border-[#2f2f2f]">
          <h1 className="text-2xl font-bold">
            {full_name}{" "}
            <span className="text-base font-medium">({released})</span>
          </h1>
          <p className="text-sm">{sub_title}</p>
        </div>

        <div className="pb-[10px] mb-[10px] border-b-[1px] border-[#2f2f2f]">
          <div className="pb-1 flex items-center">
            <div
              style={{
                background: `url(${star})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="w-[57px] h-[50px] flex text-black font-bold items-center justify-center">
              {/* https://moviesmod.com/wp-content/plugins/imdb-for-wordpress/assets/img/imdb-star.png */}
              7.5
            </div>
            <p className="ml-3">
              <span className="font-bold">Ratting:</span> 6.9 / 10 from IMDB
            </p>
          </div>
          <p>{description}</p>
        </div>

        <div className="">
          <p>Director: {director}</p>
          <p>Creator: {creator}</p>
          <p>Actors: {actors}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
