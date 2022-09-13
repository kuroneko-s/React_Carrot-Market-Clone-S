import { GetStaticProps, NextPage } from "next";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import Layout from "@components/layout";

const Post: NextPage<{ post: string }> = ({ post }) => {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: post }}></div>
    </Layout>
  );
};

// 동적 페이지.tsx에서 getStaticProps를 쓸때 필요함
// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
export function getStaticPaths<GetStaticProps>() {
  const filesName = readdirSync("./posts").map((file) => {
    const [name, extension] = file.split(".");
    return { params: { slug: name } };
  });

  return { paths: filesName, fallback: false };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { content } = matter.read(`./posts/${ctx.params.slug}.md`);

  const { value } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  return {
    props: {
      post: value,
    },
  };
};

export default Post;
