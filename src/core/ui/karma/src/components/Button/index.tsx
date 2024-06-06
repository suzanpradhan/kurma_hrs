const Button = () => {
  return (
    <div className="flex justify-end items-end p-7 gap-5">
      <button className="bg-blue-800 text-white h-9 w-24 rounded-md hover:text-black hover:bg-green-500">
        Submit
      </button>
      <button className=" border border-blue-300 h-9 w-24 rounded-md hover:bg-red-500 hover:border-none hover:text-white ">
        Cancel
      </button>
    </div>
  );
};

export default Button;
