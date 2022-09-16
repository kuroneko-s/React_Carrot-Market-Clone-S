import type { NextPage } from "next";
import DivistionItem from "@components/division_item";
import FloatingButton from "@components/floating_button";
import QuesitionContext from "@components/quesition_context";
import SubElements from "@components/sub_elements";
import Layout from "@components/layout";
import Link from "next/link";
import useSWR from "swr";
import { Post, User } from "@prisma/client";
import useCoords from "./../../libs/client/useCoords";
import client from "@libs/client/client";

interface PostWithUser extends Post {
  user: User;
  _count: {
    wonderings: number;
    answers: number;
  };
}

interface PostsResponse {
  posts: PostWithUser[];
}

const Community: NextPage<PostsResponse> = ({ posts }) => {
  /*   const { latitude, longitude } = useCoords();
  const { data } = useSWR<PostsResponse>(
    latitude && longitude
      ? `/api/posts?latitude=${latitude}&longitude=${longitude}`
      : null
  ); */

  return (
    <Layout title="동네생활" hasTabBar>
      <div className="space-y-4">
        {posts?.map((post) => (
          <Link key={post.id} href={`/community/${post.id}`}>
            <div className="flex flex-col items-start space-y-3 cursor-pointer">
              <DivistionItem context="동네생활" />
              <QuesitionContext context={post.question} />
              <div className="w-full flex justify-between text-xs font-bold text-gray-500">
                <span>{post.user.name}</span>
                <span>18시간 전</span>
              </div>
              <SubElements
                questionCount={post?._count?.wonderings}
                answerCount={post?._count?.answers}
              />
            </div>
          </Link>
        ))}
        <FloatingButton
          pathData={
            "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          }
          url="/community/write"
        />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  console.log("Building statically");
  const posts = await client.post.findMany({ include: { user: true } });

  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}

export default Community;
