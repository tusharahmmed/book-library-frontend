const BookCartPlaceholder = () => {
  return (
    <div className="animate-pulse flex flex flex-col md:flex-row p-5 text-gray-300 shadow-xl bg-[#222222] border-[1px] border-[#080808]">
      <div className="w-full md:w-[200px]">
        {/* <img
          className="w-full"
          src="https://image.tmdb.org/t/p/original/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg"
          alt=""
        /> */}
        <div className="bg-gray-800 h-[420px] md:h-[300px] w-full md:w-[200px]"></div>
      </div>

      <div className="ml-0 md:ml-5 pt-3 md:pt-0 w-full">
        <div className="pb-[10px] mb-[10px] border-b-[1px] border-[#2f2f2f]">
          <h1 className="text-2xl font-bold bg-gray-800 h-[32px] rounded-md"></h1>
          <p className="text-sm bg-gray-800 h-[20px] rounded-md mt-2"></p>
        </div>

        <div className="pb-[10px] mb-[10px] border-b-[1px] border-[#2f2f2f]">
          <div className="pb-1 flex items-center bg-gray-800 h-[54px] rounded-md"></div>
          <p className=" bg-gray-800 h-[54px] rounded-md mt-2"></p>
        </div>

        <div className="">
          <p className="bg-gray-800 h-[24px] rounded-md"></p>
          <p className="bg-gray-800 h-[24px] rounded-md mt-1"></p>
          <p className="bg-gray-800 h-[24px] rounded-md mt-1"></p>
        </div>
      </div>
    </div>
  );
};

export default BookCartPlaceholder;
