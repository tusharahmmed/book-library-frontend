import {Outlet} from "react-router-dom";
import {Navbar} from "./components/shared";

function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
