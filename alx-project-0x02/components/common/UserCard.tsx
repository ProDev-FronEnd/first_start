import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 border border-gray-200 w-full">
      <h2 className="text-xl font-semibold mb-2 text-blue-700">{name}</h2>
      <p className="text-gray-700"><strong>Email:</strong> {email}</p>
      <p className="text-gray-600 text-sm mt-1">
        <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
