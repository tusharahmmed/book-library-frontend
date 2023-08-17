import {useEffect} from "react";
import {useGetAuthQuery} from "../rtk/features/auth/authApi";
import {useDispatch} from "react-redux";
import {userLoggedIn} from "../rtk/features/auth/authSlice";

export const useAuthCheck = () => {
  const {data, isLoading} = useGetAuthQuery(undefined);

  const dispatch = useDispatch();

  // update user on store
  // useEffect(() => {}, [data]);

  // send request on reload
  useEffect(() => {
    if (data) {
      dispatch(userLoggedIn(data.data));
    }
  }, [data, dispatch]);

  return isLoading;
};

export default useAuthCheck;
