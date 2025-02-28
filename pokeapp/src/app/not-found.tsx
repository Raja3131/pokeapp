import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-9xl font-extrabold text-gray-700"> 404 </h1>
      <p className="mt-4 text-2xl font-semibold text-gray-600">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <p className="mt-2 text-gray-500">It might have been moved or deleted.</p>

      <Link href="/">
        <button className="mt-6 rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all hover:bg-blue-700">
          Go Home
        </button>
      </Link>

    
    </div>
  );
}
