// pages/index.tsx

import Head from 'next/head'
import Header from '../components/layout/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome | ALX Project 0x02</title>
        <meta name="description" content="ALX Frontend Next.js + TypeScript + Tailwind setup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-8">
        <h1 className="text-4xl font-bold mb-4 text-center">
           Welcome to ALX Project 0x02!
        </h1>
        <p className="text-lg text-center max-w-xl">
          This project is set up using Next.js, TypeScript, Tailwind CSS, and ESLint. You’re ready to build scalable and responsive UI components!
        </p>
      </main>
    </>
  )
}
