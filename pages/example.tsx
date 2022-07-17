import type { NextPage } from "next";

const Example: NextPage = () => {
  return (
    <div className="scroll-mx-2.5">
      <div className="flex flex-col space-y-2 p-5 h-screen">
        <details className="select-none open:text-white open:bg-indigo-400">
          <summary className="cursor-pointer">What is my fav food</summary>
          <span className="">Hello</span>
        </details>
        <input
          type="file"
          className="file:border-0 file:rounded-md file:bg-purple-400 file:transition-colors file:cursor-pointer file:hover:bg-red-400"
        />
      </div>
      <div className="h-screen"></div>
    </div>
  );
};

export default Example;
