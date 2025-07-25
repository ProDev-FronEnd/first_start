// pages/posts.tsx

import Head from 'next/head';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts | ALX Project 0x02</title>
        <meta name="description" content="List of posts from external API" />
      </Head>

      <Header />

      <main className="min-h-screen bg-white text-gray-900 p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">📝 Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  // ✅ Map the API data to match your component's expected props
  const posts = (await res.json()).map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.body, // Mapping `body` to `content`
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
