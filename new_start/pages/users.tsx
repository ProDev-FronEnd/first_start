// pages/users.tsx
import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Head>
        <title>Users | ALX Project 0x02</title>
        <meta name="description" content="User list fetched from external API" />
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">👥 Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </>
  );
};


export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default UsersPage;
