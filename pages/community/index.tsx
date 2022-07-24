import type { NextPage } from "next";
import DivistionItem from "../components/division_item";
import FloatingButton from "../components/floating_button";
import QuesitionContext from "../components/quesition_context";
import SubElements from "../components/sub_elements";
import Layout from "./../components/layout";

const Community: NextPage = () => {
  return (
    <Layout title="동네생활" hasTabBar>
      <div className="px-4 space-y-4">
        {new Array(10).fill(1).map((_, i) => (
          <div key={i} className="flex flex-col items-start space-y-3">
            <DivistionItem context="동네질문" />
            <QuesitionContext context="What is the best mandu restaurant?" />
            <div className="w-full flex justify-between text-xs font-bold text-gray-500">
              <span>니꼬</span>
              <span>18시간 전</span>
            </div>
            <SubElements questionCount={3} />
          </div>
        ))}
        <FloatingButton
          pathData={
            "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          }
        />
      </div>
    </Layout>
  );
};

export default Community;
