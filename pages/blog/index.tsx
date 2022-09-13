import Layout from "@components/layout";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { NextPage } from "next";
import Link from "next/link";

interface Post {
  title: string;
  date: string;
  category: string;
  slug: string;
}

const Blog: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <h1 className="text-lg font-semibold mb-8 text-center">Latest Posts</h1>
      {posts.map((post, index) => (
        <Link href={`/blog/${post.slug}`} key={index}>
          <a>
            <div>
              <span className="text-red-500">{post.title}</span>
              <div>
                <span>
                  {post.date} / {post.category}
                </span>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const blogPosts = readdirSync("./posts").map((file) => {
    const content = readFileSync(`./posts/${file}`, "utf-8");
    const [slug, _] = file.split(".");
    return { ...matter(content).data, slug };
  });

  console.log(blogPosts);
  return {
    props: {
      posts: blogPosts.reverse(),
    },
  };
}

export default Blog;
