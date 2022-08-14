import type { NextPage } from "next";
import ButtonComponent from "@components/button_component";
import InputComponent from "@components/input_component";
import Layout from "@components/layout";
import TextBox from "@components/textbox";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Product } from "@prisma/client";
import useSWR from "swr";

interface UploadProductForm {
  name: string;
  price: number;
  description: string;
}

interface UploadProductResponse {
  ok: boolean;
  product: Product;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadProductForm>();
  const [uploadProduct, { loading, data, error }] =
    useMutation<UploadProductResponse>("/api/products");
  const onValid = (data: UploadProductForm) => {
    if (loading) return;
    uploadProduct(data);
  };

  useEffect(() => {
    if (data?.ok) {
      router.push(`/products/${data.product.id}`);
    }
  }, [data, router]);
  return (
    <Layout canGoBack>
      <form className="space-y-4" onSubmit={handleSubmit(onValid)}>
        <div>
          <label className="flex justify-center items-center cursor-pointer w-full h-56 border-2 border-dashed rounded-md border-gray-400 text-gray-500 hover:border-orange-400 hover:text-orange-400">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input className="hidden" type="file" />
          </label>
        </div>
        <InputComponent
          id="name"
          placeholder="홍길동"
          labelContext="Name"
          register={register("name", { required: true })}
        />
        <InputComponent
          id="price"
          placeholder="0.00"
          labelContext="Price"
          type="price"
          currency="USD"
          currencySymbol="$"
          register={register("price", { required: true })}
        />
        <TextBox
          buttonContext={loading ? "Loading..." : "Upload product"}
          placeholder="당근할 품목에 대한 설명을 작성해주세요!"
          labelName="Description"
          hasLabel
          register={register("description", { required: true })}
        />
      </form>
    </Layout>
  );
};

export default Upload;
