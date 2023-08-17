import {RouterProvider} from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import {routes} from "./routes";

function App() {
  // check user logged in
  const checkUser = useAuthCheck();

  if (checkUser)
    return (
      <>
        <RouterProvider router={routes} />
      </>
    );
}

export default App;
