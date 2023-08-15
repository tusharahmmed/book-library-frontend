import {createBrowserRouter} from "react-router-dom";
import App from "../App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {index: true, element: <div>Home</div>},
    //   {path: "/login", element: <div>Login</div>},
    // ],
  },
]);
