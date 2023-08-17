/* eslint-disable @typescript-eslint/no-explicit-any */
import {ReactNode} from "react";
import useAuth from "../../hooks/useAuth";
import {Navigate} from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";

interface privateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({children}: privateRouteProps) => {
  const checkAuthLoadin = useAuthCheck();
  const isLoggedIn = useAuth();

  return !checkAuthLoadin && isLoggedIn ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;
