import type { NextPage } from "next";
import Profile from "../components/profile";
import Layout from "./../components/layout";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Profile
            key={i}
            context="Steve Jebs"
            subContext="See you tomorrow"
            isSmall
          />
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
