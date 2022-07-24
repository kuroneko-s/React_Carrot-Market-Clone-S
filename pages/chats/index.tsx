import type { NextPage } from "next";
import Layout from "./../components/layout";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="py-10 px-4 divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div key={i} className="flex py-3 space-x-3 ">
            <div className="bg-slate-300 rounded-full h-10 w-10" />
            <div className="flex flex-col justify-start">
              <p className="font-bold text-gray-900 cursor-pointer">
                Steve Jebs
              </p>
              <p className="text-sm text-gray-600">See you tomorrow</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
