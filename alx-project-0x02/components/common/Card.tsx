import { type CardProps } from '@/interfaces';

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md mx-auto my-4">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  )
}
