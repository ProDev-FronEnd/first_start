import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage: React.FC = () => {
  const handleClick = () => alert('Button clicked!');

  return (
    <>
      <Head>
        <title>About | ALX Project 0x02</title>
        <meta name="description" content="Learn more about Splash App and its features" />
      </Head>

      <Header />

      <main className="min-h-screen p-6 pt-24 bg-black-100 text-center">
        <h1 className="text-4xl font-bold mb-4">📘 Welcome to the About Page</h1>
        <p className="mb-6 text-lg">This page demonstrates a reusable Button component with various props.</p>

        <div className="space-x-4">
           <Button label="Small Rounded" size="small" shape="rounded-sm" onClick={handleClick} children={null} />
        <Button label="Medium Rounded" size="medium" shape="rounded-md" onClick={handleClick} children={null} />
        <Button label="Large Rounded" size="large" shape="rounded-full" onClick={handleClick} children={null} />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
