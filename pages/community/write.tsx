import type { NextPage } from "next";
import TextBox from "@components/textbox";
import Layout from "@components/layout";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { Post } from "@prisma/client";
import { useRouter } from "next/router";

interface WriteForm {
  question: string;
}

interface WriteResponse {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<WriteForm>();
  const [post, { data, loading }] = useMutation<WriteResponse>("/api/posts");
  const onValid = (data: WriteForm) => {
    if (loading) return;
    post(data);
  };

  useEffect(() => {
    if (data && data.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack>
      <form className="flex flex-col" onSubmit={handleSubmit(onValid)}>
        <TextBox
          placeholder="Write a question!"
          buttonContext={loading ? "Loading..." : "Submit"}
          register={register("question", { required: true, minLength: 5 })}
        />
      </form>
    </Layout>
  );
};

export default Write;
