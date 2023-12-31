/* eslint-disable @typescript-eslint/no-explicit-any */
import {ReactNode} from "react";
import useAuth from "../../hooks/useAuth";
import {Navigate} from "react-router-dom";

interface privateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({children}: privateRouteProps) => {
  const isLoggedIn = useAuth();
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default PrivateRoute;
