import {useEffect, useState} from "react";
import {useGetAuthQuery} from "../rtk/features/auth/authApi";
import {useDispatch} from "react-redux";
import {userLoggedIn} from "../rtk/features/auth/authSlice";

export const useAuthCheck = () => {
  const {data, isLoading} = useGetAuthQuery(undefined);
  const [authCheck, setAuthCheck] = useState(false);

  const dispatch = useDispatch();

  // update user on store

  useEffect(() => {
    if (!isLoading) {
      setAuthCheck(true);
    }
    if (data) {
      dispatch(userLoggedIn(data.data));
    }
  }, [isLoading, data, dispatch]);

  return authCheck;
};

export default useAuthCheck;
