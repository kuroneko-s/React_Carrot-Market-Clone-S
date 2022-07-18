import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="py-14 px-4">
      <div>
        <label className="flex justify-center items-center cursor-pointer w-full h-56 border-2 border-dashed rounded-md border-gray-400 text-gray-500 hover:border-orange-400 hover:text-orange-400">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input className="hidden" type="file" />
        </label>
      </div>
      <div className="mt-3 flex flex-col justify-start">
        <label className="text-sm font-medium">Price</label>
        <div className="flex relative mt-1">
          <div className="absolute flex justify-center items-center left-3 h-full pointer-events-none text-sm text-gray-500">
            <span>$</span>
          </div>
          <input
            type="text"
            className="pl-7 pr-12 appearance-none w-full px-3 border-transparent border-gray-300 shadow-sm placeholder-gray-400 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            placeholder="0.00"
          />
          <div className="absolute flex justify-center items-center right-3 h-full pointer-events-none text-gray-700">
            <span>USD</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-col justify-start">
        <label className="text-sm font-medium">Description</label>
        <textarea
          className="mt-1 appearance-none w-full px-3 border-transparent border-gray-300 shadow-sm placeholder-gray-400 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          rows={4}
        />
      </div>
      <button className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
