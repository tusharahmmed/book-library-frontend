import {Link} from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" text-gray-400 w-screen h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl">Go To Home</h1>
        <Link to={"/"}>
          <p className="text-lg text-blue-400">click here</p>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
