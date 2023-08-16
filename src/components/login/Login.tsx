import {useForm, SubmitHandler} from "react-hook-form";
import {IUser} from "../../types/user";
import {useUserLoginMutation} from "../../rtk/features/auth/authApi";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // query
  const [userLogin, {isLoading, data, error, isError}] = useUserLoginMutation();

  // hook form
  const {
    register,
    handleSubmit,

    // formState: {errors},
  } = useForm<IUser>();
  const onSubmit: SubmitHandler<IUser> = (data) => {
    userLogin(data);
  };

  // listen response
  useEffect(() => {
    setErrorMessage("");

    if (!isLoading && isError) {
      setErrorMessage(error?.data?.message);
    }
    console.log(data);

    // redirect
    if (data?.data?.accessToken && data?.data?.user) {
      navigate("/");
    }
  }, [data, error]);

  return (
    <div className="m-auto w-[90%] md:w-[60%] lg:w-[40%] px-8 py-4 pb-6 bg-[#27272a] rounded">
      <h1 className="text-3xl text-center mb-4">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="">
          <div className="mb-4">
            <input
              className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
              type="text"
              placeholder="Email"
              {...register("email", {required: true})}
            />
          </div>
          <div className="mb-4">
            <input
              className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
              type="text"
              placeholder="Password"
              {...register("password", {required: true})}
            />
          </div>
          <div className="inpur-wraper mt-1">
            <button
              disabled={isLoading}
              type="submit"
              className="bg-[#228BE6] w-full h-[40px] rounded-lg border-0 text-white"
              // onClick={() => refSubmitButtom?.current?.click()}
            >
              Login
            </button>
          </div>
        </div>
      </form>
      {errorMessage && (
        <div className="mt-4 bg-red-700 text-black-700 p-3 rounded text-center">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Login;
