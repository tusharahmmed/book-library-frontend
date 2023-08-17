import {createBrowserRouter} from "react-router-dom";
import {
  AddBook,
  BookDetailsPage,
  EditBook,
  HomePage,
  LoginPage,
  NotFound,
  RegisterPage,
} from "../pages";
import Root from "../Root";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index: true, element: <HomePage />},
      {path: "/books/:id", element: <BookDetailsPage />},
      {
        path: "/add-book",
        element: (
          // <PrivateRoute>
          <AddBook />
          // </PrivateRoute>
        ),
      },
      {path: "/edit-book/:id", element: <EditBook />},
    ],
  },
  {path: "/login", element: <LoginPage />},
  {path: "/sign-up", element: <RegisterPage />},

  {
    path: "*",
    element: <NotFound />,
  },
]);
