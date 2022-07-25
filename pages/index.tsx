import type { NextPage } from "next";
import Layout from "../components/layout";
import FloatingButton from "../components/floating_button";
import ItemComponent from "../components/item_component";

const Home: NextPage = () => {
  return (
    <Layout title="홈" hasTabBar>
      <div className="flex flex-col space-y-5 divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <ItemComponent
            key={i}
            title="iPhone Pro 13"
            subTitle="Black"
            price="$92"
            commentCount={3}
            lovedCount={5}
          />
        ))}
        <FloatingButton
          pathData={"M12 6v6m0 0v6m0-6h6m-6 0H6"}
          url="/items/upload"
        />
      </div>
    </Layout>
  );
};

export default Home;
