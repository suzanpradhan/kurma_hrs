const page = () => {
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center bg-[#1e1e1e]">
      <div className="flex mt-10 ">
        <div className="p-44">
          <div className="h-[429px] w-[400px] bg-[#2B2F38] text-white p-4">
            HRS Administration
          </div>
        </div>
        <div className="p-44 w-[700px] h-[429px] mt-[176px] relative bg-white right-[177px] flex justify-center items-center">
          <div>
            <h1 className="text-2xl mb-8 px-28">Sign In</h1>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-[330px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-[330px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="w-[330px] bg-orange-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
