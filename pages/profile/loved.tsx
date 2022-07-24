import { NextPage } from "next";
import Layout from "./../components/layout";

const Loved: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="flex flex-col space-y-5 py-10 px-2">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex justify-between px-2 pb-4 border-b-2 cursor-pointer"
          >
            <div className="flex space-x-4">
              <div className="bg-gray-400 rounded-md w-20 h-20" />
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-base text-gray-900">
                  New iPhone 14
                </h3>
                <span className="text-sm text-gray-500">Black</span>
                <span className="font-bold text-base text-gray-900">$95</span>
              </div>
            </div>
            <div className="flex justify-end items-end space-x-1.5">
              <div className="flex space-x-1 justify-center items-center text-gray-500 text-xs">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span>1</span>
              </div>
              <div className="flex space-x-1 justify-center items-center text-gray-500 text-xs">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
                <span>1</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Loved;
