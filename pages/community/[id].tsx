import type { NextPage } from "next";
import Button from "@components/button_component";
import Comment from "@components/comment";
import DivistionItem from "@components/division_item";
import Profile from "@components/profile";
import QuesitionContext from "@components/quesition_context";
import SubElements from "@components/sub_elements";
import TextBox from "@components/textbox";
import Layout from "@components/layout";

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-3">
        <div className="px-4 mb-3 border-b-2">
          <DivistionItem context="동네질문" />
          <Profile context="Steve Jebs" subContext="View profile &rarr;" />
        </div>
        <QuesitionContext
          context="What is the best mandu restaurant?What is the best mandu restaurant?What is the best mandu restaurant?What is the best mandu restaurant?What is the best mandu restaurant?"
          details
        />
        <SubElements details />
        <Comment
          context="Steve Jebs"
          subContext="View profile &rarr;"
          comment="이거 팔렷어요 ? "
        />
        <Comment
          context="Steve Jebs"
          subContext="View profile &rarr;"
          comment="이거 팔렷어요 ? "
        />
        <Comment
          context="Steve Jebs"
          subContext="View profile &rarr;"
          comment="이거 팔렷어요 ? "
        />

        <TextBox placeholder="answer" buttonContext="Reply" />
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
