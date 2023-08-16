import React from "react";
import {Link} from "react-router-dom";

const CardItem = ({movie}: any) => {
  // destructure props
  const {title, _id, img} = movie || {};

  return (
    <div className="movies-item mx-auto  pb-4 rounded w-full bg-black mb-6 sm:mb-0 sm:mx-0">
      <Link
        to={`/download/${_id}`}
        className="movie-thumbnail block relative h-auto overflow-hidden">
        <img
          alt="movie"
          className="object-cover object-center w-full h-full block"
          src={img}
        />
      </Link>
      <div className="movie-info mt-4">
        <p className="text-white text-center font-medium text-lg title-font mb-1">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
