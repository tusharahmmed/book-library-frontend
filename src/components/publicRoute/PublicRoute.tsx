/* eslint-disable @typescript-eslint/no-explicit-any */
import {ReactNode} from "react";
import useAuth from "../../hooks/useAuth";
import {Navigate} from "react-router-dom";

interface privateRouteProps {
  children: ReactNode;
}

const PublicRoute = ({children}: privateRouteProps) => {
  const isLoggedIn = useAuth();
  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return children;
};

export default PublicRoute;
