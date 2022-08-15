import type { NextPage } from "next";
import ButtonWith from "@components/button_with";
import Layout from "@components/layout";
import Profile from "@components/profile";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";
import { Product, User } from "@prisma/client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: ProductWithUser[];
  isLiked: boolean;
}

const ItemDetail: NextPage = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { data, mutate: boundMutate } = useSWR<ItemDetailResponse>(
    // optional query 사용시 이렇게 사용함
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  const [toggleFav] = useMutation(`/api/products/${router.query.id}/fav`);

  // Loading 처리 작업 필요

  const onFavClick = () => {
    toggleFav({});
    if (!data) return;

    boundMutate(
      (prev: any) => ({
        ...data,
        isLiked: !prev.isLiked,
      }),
      false
    );

    // refetch and mutate 해줌
    /* mutate(
      "/api/users/me",
      (prev: any) => ({
        ok: !prev.ok,
      }),
      false
    ); */
  };

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
              subBtnPath={
                data?.isLiked
                  ? "M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  : "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              }
              clickHandler={onFavClick}
              isLiked={data?.isLiked}
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
