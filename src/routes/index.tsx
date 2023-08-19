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
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import PublicRoute from "../components/publicRoute/PublicRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: "/books/:id",
        element: (
          <PrivateRoute>
            <BookDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-book/:id",
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <PublicRoute>
        <RegisterPage />
      </PublicRoute>
    ),
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
