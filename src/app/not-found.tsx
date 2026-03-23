import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2>404 - Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link 
        href="/" 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Return Home
      </Link>
    </div>
  );
}