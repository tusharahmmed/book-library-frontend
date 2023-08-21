import {Link} from "react-router-dom";
import SearchForm from "./SearchForm";
import useAuth from "../../../hooks/useAuth";
import MenuItem from "./Menu";

const Navbar = () => {
  const isUserLoggedIn = useAuth();

  return (
    <header className="text-gray-400 bg-[#27272a] body-font xl:w-4/5 mx-auto pt-5 rounded-b-lg">
      <div className="menu">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img
              className="cursor-pointer"
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBQre0NeC1be_jIXcKP2uWKDXwXRhhgg5Tg&usqp=CAU"
              src="/logo.png"
              alt=""
              height={50}
              width={50}
            />
            {/* <h1>BOOK STORE</h1> */}
          </Link>
          <SearchForm />
          <span>
            {!isUserLoggedIn && (
              <>
                <Link to={"/login"}>
                  <button className="inline-flex items-center bg-[#228BE6] border-0 py-2 px-4 rounded-xl	 focus:outline-none  text-white mt-4 md:mt-0 mr-2">
                    Login
                  </button>
                </Link>
                <Link to={"/sign-up"}>
                  <button className="inline-flex items-center bg-[#228BE6] border-0 py-2 px-5 rounded-xl	 focus:outline-none  text-white mt-4 md:mt-0">
                    Register
                  </button>
                </Link>
              </>
            )}
            {isUserLoggedIn && (
              <>
                <Link to={"/add-book"}>
                  <button className="inline-flex items-center bg-[#228BE6] border-0 py-2 px-4 rounded-xl	 focus:outline-none  text-white mt-4 md:mt-0 mr-2">
                    Add Book
                  </button>
                </Link>
                <MenuItem />
              </>
            )}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
