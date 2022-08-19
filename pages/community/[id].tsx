import type { NextPage } from "next";
import Comment from "@components/comment";
import DivistionItem from "@components/division_item";
import Profile from "@components/profile";
import QuesitionContext from "@components/quesition_context";
import SubElements from "@components/sub_elements";
import TextBox from "@components/textbox";
import Layout from "@components/layout";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Answer, Post, User } from "@prisma/client";
import useMutation from "@libs/client/useMutation";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

interface AnswerWithUser extends Answer {
  user: User;
}

interface PostWithUser extends Post {
  user: User;
  _count: {
    answers: number;
    wonderings: number;
  };
  answers: AnswerWithUser[];
}

interface CommunityPostResponse {
  ok: boolean;
  post: PostWithUser;
  isWondering: boolean;
}

interface AnswerForm {
  answer: string;
}

interface AnswerResponse {
  ok: boolean;
  answer: Answer;
}

const CommunityPostDetail: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<AnswerForm>();
  const { data, mutate } = useSWR<CommunityPostResponse>(
    router?.query?.id ? `/api/posts/${router?.query?.id}` : null
  );
  // 404 Error 처리 해주기
  const [wonder, { loading }] = useMutation(
    `/api/posts/${router.query.id}/wonder`
  );
  const [sendAnswer, { data: answerData, loading: answerLoading }] =
    useMutation<AnswerResponse>(`/api/posts/${router.query.id}/answer`);
  const onWonderClick = () => {
    if (!data) return;
    mutate(
      {
        ...data,
        post: {
          ...data.post,
          _count: {
            ...data.post._count,
            wonderings: data.isWondering
              ? data.post._count.wonderings - 1
              : data.post._count.wonderings + 1,
          },
        },
        isWondering: !data.isWondering,
      },
      false
    );
    if (!loading) wonder({});
  };

  const onValid = (form: AnswerForm) => {
    console.log(form);
    if (answerLoading) return;
    sendAnswer(form);
  };

  useEffect(() => {
    if (answerData && answerData.ok) {
      reset();
      mutate();
    }
  }, [answerData, reset]);

  return (
    <Layout canGoBack>
      <div className="space-y-3">
        <div className="px-4 mb-3 border-b-2">
          <DivistionItem context="동네질문" />
          <Profile
            id={data?.post?.userId + ""}
            context={data?.post?.user?.name}
            subContext="View profile &rarr;"
          />
        </div>
        <QuesitionContext context={data?.post?.question} details />
        <SubElements
          answerCount={data?.post?._count?.answers}
          questionCount={data?.post?._count?.wonderings}
          wonderClickHandler={onWonderClick}
          isWondering={data?.isWondering ?? false}
          details
        />
        {data?.post?.answers.map((answer) => (
          <Comment
            key={answer.id}
            context={answer.user.name}
            subContext="View profile &rarr;"
            comment={answer.answer}
          />
        ))}
        <form onSubmit={handleSubmit(onValid)}>
          <TextBox
            placeholder="answer"
            buttonContext={answerLoading ? "Loading..." : "Reply"}
            register={register("answer", { required: true, minLength: 5 })}
          />
        </form>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
