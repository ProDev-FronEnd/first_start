// pages/home.tsx

import Head from 'next/head';
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';



const Home: React.FC = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const addPost = (post: { title: string; content: string }) => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <>
      <Head>
        <title>Home | ALX Project 0x02</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-start min-h-screen bg-blue-50 text-gray-900 p-8">
        <h1 className="text-4xl font-bold mb-6">🏠 Home Page</h1>
        <p className="mb-4 text-center">
          Below are some dynamic cards created using reusable components:
        </p>

        {/* Default static cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <Card title="Welcome to ALX" content="This is your first dynamic card using TypeScript props!" />
          <Card title="Reusable Components" content="Reusable components help maintain clean and scalable code." />
          <Card title="Powered by Tailwind" content="Tailwind CSS lets you build modern UIs fast." />
        </div>

        {/* Button to open modal */}
        <button
          onClick={() => setModalOpen(true)}
          className="mb-6 px-4 py-2 bg-green-600 text-white rounded-md"
        >
          Add New Post
        </button>

        {/* Dynamically added posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        {/* Modal */}
        <PostModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={addPost}
        />
      </main>
    </>
  );
};

export default Home;
