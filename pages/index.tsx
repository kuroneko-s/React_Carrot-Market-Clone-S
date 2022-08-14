import type { NextPage } from "next";
import Layout from "@components/layout";
import FloatingButton from "@components/floating_button";
import ItemComponent from "@components/item_component";
import useUser from "@libs/client/useUser";
import Head from "next/head";
import useSWR from "swr";
import { Product } from "@prisma/client";

interface ProductsResponse {
  ok: boolean;
  products: Product[];
}

const Home: NextPage = () => {
  const { user, isLoading } = useUser(); // data를 넘겨주는 Hook
  const { data } = useSWR<ProductsResponse>("/api/products");

  return (
    <Layout title="홈" hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col space-y-5 divide-y-[1px]">
        {data?.products?.map((product) => (
          <ItemComponent
            id={product.id + ""}
            key={product.id}
            title={product.name}
            subTitle={product.name}
            price={product.price + ""}
            commentCount={3}
            lovedCount={5}
          />
        ))}
        <FloatingButton
          pathData={"M12 6v6m0 0v6m0-6h6m-6 0H6"}
          url="/products/upload"
        />
      </div>
    </Layout>
  );
};

export default Home;
