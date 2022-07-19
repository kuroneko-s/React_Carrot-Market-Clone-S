import type { NextPage } from "next";

const CommunityPostDetail: NextPage = () => {
  return (
    <div>
      <div className="px-4 mb-3 border-b-2">
        <span className="inline-flex items-center px-2.5 py-0.5 my-2 bg-gray-200 rounded-xl text-xs">
          동네질문
        </span>
        <div className="flex py-3 space-x-3">
          <div className="bg-slate-300 rounded-full h-10 w-10" />
          <div className="flex flex-col justify-start">
            <p className="font-bold text-gray-900 cursor-pointer">Steve Jebs</p>
            <p className="text-sm text-gray-600">View profile &rarr;</p>
          </div>
        </div>
      </div>
      <span className="font-medium block px-4 mb-3">
        <span className="text-orange-500 font-bold">Q.</span> What is the best
        mandu restaurant?
      </span>
      <div className="w-full py-3 px-4 border-t-2 border-b-2 flex justify-start text-sm space-x-4">
        <span className="flex justify-center items-center space-x-1">
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
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>궁금해요 1</span>
        </span>
        <span className="flex justify-center items-center space-x-1">
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
          <span>답변 1</span>
        </span>
      </div>
      <div>
        <div className="flex justify-start pt-5 pb-2 px-4 space-x-3">
          <div className="bg-slate-300 rounded-full h-8 w-8" />
          <div className="flex flex-col justify-start">
            <p className="font-bold text-sm text-gray-900 cursor-pointer">
              Steve Jebs
            </p>
            <p className="text-xs text-gray-600">2시간 전</p>
            <p className="py-3">
              The best mandu restaurant is the one next to my house.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-4">
        <textarea
          className="mt-1 resize-none appearance-none w-full px-3 border-transparent border-gray-300 shadow-sm placeholder-gray-400 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          placeholder="answer"
          rows={4}
        />
        <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
          Reply
        </button>
      </div>
    </div>
  );
};

export default CommunityPostDetail;
