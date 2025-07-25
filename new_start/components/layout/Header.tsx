// components/layout/Header.tsx

import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-center space-x-6">
        <Link href="/home" className="hover:underline hover:text-yellow-300">
          Home
        </Link>
        <Link href="/about" className="hover:underline hover:text-yellow-300">
          About
        </Link>
        <Link href="/posts" className="hover:underline hover:text-yellow-300">
          Posts
        </Link>
        <Link href="/users" className="hover:underline hover:text-yellow-300">
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
