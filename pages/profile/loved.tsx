import { NextPage } from "next";
import ItemComponent from "../components/item_component";
import Layout from "./../components/layout";

const Loved: NextPage = () => {
  return (
    <Layout canGoBack title="관심목록">
      <div className="flex flex-col space-y-5">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <ItemComponent
            key={i}
            title="iPhone Pro 13"
            subTitle="Black"
            price="$92"
            commentCount={3}
            lovedCount={5}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Loved;
