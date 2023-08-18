import {useAppSelector} from "../rtk/hooks/hook";

const useAuth = () => {
  const auth = useAppSelector((state) => state?.auth);

  if (auth?.accessToken && auth?.user) {
    return true;
  } else {
    return false;
  }
};

export default useAuth;
