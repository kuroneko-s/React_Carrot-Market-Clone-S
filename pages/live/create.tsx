import { NextPage } from "next";
import Layout from "./../components/layout";

const LiveCreater: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="my-10 mx-4 space-y-5">
        <div className="mt-3 flex flex-col justify-start">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="mt-1 appearance-none w-full px-3 border-transparent border-gray-300 shadow-sm placeholder-gray-400 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            placeholder="홍길동"
          />
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
          Go Live
        </button>
      </div>
    </Layout>
  );
};

export default LiveCreater;
