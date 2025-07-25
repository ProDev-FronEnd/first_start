// components/common/PostCard.tsx

import React from "react";
import { PostProps } from "@/interfaces";

interface PostCardProps {
  title: string;
  content: string;  // This maps to body
  userId: number;
}

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{content}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
