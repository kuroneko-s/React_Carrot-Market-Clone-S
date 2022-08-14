import type { NextPage } from "next";
import ButtonWith from "@components/button_with";
import Layout from "@components/layout";
import Profile from "@components/profile";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Product, User } from "@prisma/client";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: ProductWithUser[];
}

const ItemDetail: NextPage = () => {
  const router = useRouter();
  console.log(router.query);
  // optional query 사용시 이렇게 사용함
  const { data } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  // Loading 처리 작업 필요

  return (
    <Layout canGoBack>
      <div className="pt-3 pb-6">
        <div>
          <div className="bg-slate-300 h-96 rounded-md w-full" />
          <Profile
            context={data?.product?.user.name}
            subContext="View profile &rarr;"
            id={data?.product?.user.id + ""}
          />

          <div className="mt-2 space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {data?.product?.name}
            </h1>
            <p className="text-2xl">{data?.product?.price}</p>
            <p className="text-base text-gray-700">
              {data?.product?.description}
            </p>
            <ButtonWith
              buttonContext="Talk to seller"
              subBtnPath="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </div>
        </div>

        <div className="mt-6">
          <h2 className="mb-6 text-gray-900 text-2xl font-bold">
            Similar items
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {data?.relatedProducts?.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div key={product.id} className="cursor-pointer">
                  <div className="bg-slate-300 h-56 w-full rounded-md" />
                  <h3 className="mt-2 text-base">{product.name}</h3>
                  <p className="-mt-1 font-bold text-sm">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
