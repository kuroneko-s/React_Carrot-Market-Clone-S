import { NextPage } from "next";
import FloatingButton from "../components/floating_button";
import Layout from "./../components/layout";

const Live: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <div className="divide-y-2 space-y-4">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div key={i} className="pt-4 px-4">
            <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
            <h3 className="font-medium text-gray-600 text-lg mt-2">
              Let&rsquo;s try potatoes
            </h3>
          </div>
        ))}
        <FloatingButton
          pathData={
            "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          }
        />
      </div>
    </Layout>
  );
};

export default Live;
