import type { NextPage } from "next";
import Layout from "../components/layout";

const ItemDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-8 px-4">
        <div className="">
          <div className="bg-slate-300 h-96 w-full" />
          <div className="flex py-3 space-x-3 border-b-2">
            <div className="bg-slate-300 rounded-full h-12 w-12" />
            <div className="flex flex-col justify-start">
              <p className="font-bold text-gray-900 cursor-pointer">
                Steve Jebs
              </p>
              <p className="text-sm text-gray-600">View profile &rarr;</p>
            </div>
          </div>
          <div className="mt-2 space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
            <p className="text-2xl">$140</p>
            <p className="text-base text-gray-700">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="flex justify-between items-center pt-3 space-x-2">
              <button className="flex-1 py-3 rounded-md text-white shadow-sm bg-orange-400 focus:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
                Talk to seller
              </button>
              <button className="p-3 hover:bg-slate-100 rounded-md text-gray-500 transition-colors">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="mb-6 text-gray-900 text-2xl font-bold">
            Similar items
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="bg-slate-300 h-56 w-full rounded-sm" />
                <h3 className="mt-2 text-base">Galaxy S60</h3>
                <p className="-mt-1 font-bold text-sm">$6</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
