import {useEffect, useState} from "react";
import {useGetAuthQuery} from "../rtk/features/auth/authApi";
import {useDispatch} from "react-redux";
import {userLoggedIn} from "../rtk/features/auth/authSlice";

export const useAuthCheck = () => {
  const [userChecked, setUserChecked] = useState(false);

  const {data} = useGetAuthQuery(undefined);

  const dispatch = useDispatch();

  // update user on store
  // useEffect(() => {}, [data]);

  // send request on reload
  useEffect(() => {
    if (data) {
      dispatch(userLoggedIn(data.data));
    }

    // after checking
    setUserChecked(true);
  }, [data, dispatch]);

  return userChecked;
};

export default useAuthCheck;
