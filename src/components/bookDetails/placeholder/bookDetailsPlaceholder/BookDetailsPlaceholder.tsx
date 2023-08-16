import BookCartPlaceholder from "../bookCartPlaceholder/bookCartPlaceholder";

const BookDetailsPlaceholder = () => {
  return (
    <div className="movies body-font container p-5 mt-14 pb-10 mx-auto xl:w-3/4 bg-[#1B1B1B]">
      <BookCartPlaceholder />

      <div className="bg-[#1B1B1B]">
        <div className="mt-[20px] animate-pulse">
          <h2 className="text-2xl text-[#008080] bg-gray-800 h-[32px] rounded-md"></h2>
          <ul className="list-none text-gray-500 mt-[1.5em] mb-[1.571em] ml-[1.9em]">
            <li className="bg-gray-800 h-[24px] rounded-md mb-1"></li>
            <li className="bg-gray-800 h-[24px] rounded-md mb-1"></li>
            <li className="bg-gray-800 h-[24px] rounded-md mb-1"></li>
            <li className="bg-gray-800 h-[24px] rounded-md mb-1"></li>
            <li className="bg-gray-800 h-[24px] rounded-md mb-1"></li>
            <li className="bg-gray-800 h-[24px] rounded-md mb-1"></li>
            <li className="bg-gray-800 h-[24px] rounded-md mb-1"></li>
          </ul>
        </div>

        <div className="mt-[20px] animate-pulse">
          <h2 className="text-2xl text-[#008080] bg-gray-800 h-[32px] rounded-md mb-[20px]"></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-gray-800 rounded h-[140px] md:h-[148px] lg:h-[201px] 2xl:h-[225px]"></div>
            <div className="bg-gray-800 rounded h-[140px] md:h-[148px] lg:h-[201px] 2xl:h-[225px]"></div>
            <div className="bg-gray-800 rounded h-[140px] md:h-[148px] lg:h-[201px] 2xl:h-[225px]"></div>
            <div className="bg-gray-800 rounded h-[140px] md:h-[148px] lg:h-[201px] 2xl:h-[225px]"></div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center animate-pulse">
        <button className="text-black w-[196px] h-[52px] rounded-lg font-bold bg-gray-800 text-xl"></button>
      </div>
    </div>
  );
};

export default BookDetailsPlaceholder;
