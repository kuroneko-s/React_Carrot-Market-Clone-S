import { NextPage } from "next";
import Layout from "./../components/layout";

const LiveDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-4">
        <div className="pt-4">
          <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
          <h3 className="text-gray-800 font-semibold text-2xl mt-2 text-center">
            Let&rsquo;s try potatoes
          </h3>
        </div>

        <div className="pt-10 pb-16 h-[50vh] px-4 overflow-y-scroll space-y-5">
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              Hi how much are you selling them for?
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              I want ￦20,000
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              미쳤어
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              Hi how much are you selling them for?
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              I want ￦20,000
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              미쳤어
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              Hi how much are you selling them for?
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              I want ￦20,000
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              미쳤어
            </div>
          </div>
          <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
            <div className="flex items-center relative">
              <input
                type="text"
                className="shadow-sm rounded-full w-full pr-12 border-gray-400 focus:ring-orange-400 focus:outline-none focus:border-orange-400"
              />
              <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                <span className="flex items-center bg-orange-400 rounded-full px-3 text-sm text-white cursor-pointer hover:bg-orange-500 transition-colors select-none hover:ring-2 hover:ring-offset-2 hover:ring-orange-400">
                  &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LiveDetail;
