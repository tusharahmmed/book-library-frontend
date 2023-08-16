import React from "react";

const CardPlaceholder = () => {
  return (
    <div className="animate-pulse mx-auto  pb-4 rounded w-full bg-black mb-6 sm:mb-0 sm:mx-0">
      <a className="block relative h-auto overflow-hidden">
        {/* <img
          alt="movie"
          className="object-cover object-center w-full h-full block"
          src="https://image.tmdb.org/t/p/original/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg"
        /> */}
        <div className="h-[546px] md:h-[300px] object-cover object-center w-full h-full block bg-[#27272a]"></div>
      </a>
      <div className="mt-4">
        <p className="bg-[#27272a] rounded-sm mb-2 h-5"></p>
        <p className="bg-[#27272a] rounded-sm mb-2 h-5"></p>
        <p className="bg-[#27272a] rounded-sm mb-2 h-5"></p>
      </div>
    </div>
  );
};

export default CardPlaceholder;
