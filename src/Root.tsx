import {Outlet} from "react-router-dom";
import {Navbar} from "./components/shared";

const Root = () => {
  return (
    <>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Root;
