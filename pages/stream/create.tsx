import { NextPage } from "next";
import InputComponent from "@components/input_component";
import TextBox from "@components/textbox";
import Layout from "@components/layout";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Stream } from "@prisma/client";

interface CreateForm {
  name: string;
  price: string;
  description: string;
}

interface CreateResponse {
  ok: boolean;
  stream: Stream;
}

const LiveCreater: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<CreateForm>();
  const [createStream, { data, loading }] =
    useMutation<CreateResponse>("/api/stream");
  const onValid = (data: CreateForm) => {
    if (loading) return;
    createStream(data);
  };

  useEffect(() => {
    if (data && data.ok) {
      router.push(`/stream/${data.stream.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack>
      <form className="space-y-5" onSubmit={handleSubmit(onValid)}>
        <InputComponent
          id="name"
          placeholder="라이브 제목"
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
          register={register("price", { required: true, valueAsNumber: true })}
        />
        <TextBox
          buttonContext={loading ? "Loading..." : "Go Live"}
          placeholder="라이브에 대해 설명을 적어주세요!"
          labelName="Description"
          hasLabel
          register={register("description", { required: true })}
        />
      </form>
    </Layout>
  );
};

export default LiveCreater;
