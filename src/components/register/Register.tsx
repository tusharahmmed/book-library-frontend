const Register = () => {
  return (
    <div className="m-auto w-[90%] md:w-[60%] lg:w-[40%] px-8 py-4 pb-6 bg-[#27272a] rounded">
      <h1 className="text-3xl text-center mb-4">Register</h1>
      <form className="">
        <div className="">
          <div className="mb-4">
            <input
              className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <input
              className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <input
              className="bg-[#18181b] w-full h-[40px] rounded-lg px-4 border-1 border-[#3f3f46] focus:outline-none"
              type="text"
              placeholder="Password"
            />
          </div>
          <div className="inpur-wraper mt-1">
            <button
              className="bg-[#228BE6] w-full h-[40px] rounded-lg border-0 text-white"
              // onClick={() => refSubmitButtom?.current?.click()}
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
