
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-semibold mb-8">Welcome to My School App!</h1>
      <div className="flex space-x-4">
        <Link href="/addSchool" className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Add School
        </Link>
        <Link href="/show-school" className="bg-green-500 text-white rounded py-2 px-4 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800">
          Show School
        </Link>
      </div>
    </div>
  );
}
