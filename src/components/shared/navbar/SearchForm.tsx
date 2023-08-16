const SearchForm = () => {
  return (
    <form
      // ref={formRef}
      // onSubmit={handleSubmit}
      className=" relative text-white-900 md:ml-auto md:mr-auto z-[15] group">
      <input
        //   onChange={handleInput}
        //   onFocus={() => setResponseVisible(true)}
        //   value={search}
        id="search-movie"
        type="search"
        placeholder="Search"
        className="z-[15] bg-[#18181b] border border-1 border-[#3f3f46] h-10 px-5 pr-10 rounded-lg text-sm lg:w-96 focus:outline-none text-gray-100"
      />
      <button
        id="form-btn"
        type="submit"
        className="absolute rounded-md right-[16px] top-[1px] mt-0 -mr-4 bg-[#228BE6] p-[7px] text-white font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;
