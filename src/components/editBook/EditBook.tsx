/* eslint-disable @typescript-eslint/no-explicit-any */
import {MultiSelect} from "@mantine/core";
import {useState} from "react";

const EditBook = () => {
  const [generations, setGenerations]: any = useState([]);

  return (
    <div className="mt-10 m-auto text-gray-400 w-[90%] md:w-[60%] lg:w-[40%] px-8 py-4 pb-6 bg-[#27272a] rounded">
      <h1 className="text-3xl text-center mb-4">Edit Book</h1>
      <form className="">
        <div className="">
          <div className="mb-4">
            <label className="ml-3 mb-2 inline-block" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
              type="text"
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <label className="ml-3 mb-2 inline-block" htmlFor="author">
              Author
            </label>
            <input
              id="author"
              className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
              type="text"
              placeholder="Authro"
            />
          </div>

          <div className="mb-4">
            <label className="ml-3 mb-2 inline-block">Genre</label>
            <MultiSelect
              //   style={{padding: 0}}
              //   variant="unstyled"
              value={generations}
              onChange={setGenerations}
              className="multi-select w-full h-[40px] rounded-lg border-1 "
              rightSection={""}
              rightSectionWidth={0}
              maxDropdownHeight={150}
              size="md"
              radius="md"
              // className="input-bg w-full h-[40px] rounded-lg px-4 border-0"
              data={["Fiction", "Novel", "Mystery", "History", "Romance"]}
              placeholder="generations"
              searchable
              nothingFound="Nothing found"
            />
          </div>
          <div className="mb-4">
            <label className="ml-3 mb-2 inline-block" htmlFor="year">
              Publication Year
            </label>
            <input
              id="year"
              className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
              type="text"
              placeholder="Year"
            />
          </div>

          <div className="inpur-wraper mt-1">
            <button
              className="bg-[#228BE6] w-full h-[40px] rounded-lg border-0 text-white"
              // onClick={() => refSubmitButtom?.current?.click()}
            >
              Update Book
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
