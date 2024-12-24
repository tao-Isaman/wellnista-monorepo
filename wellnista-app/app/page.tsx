import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Wellnista</h1>
      <p className="mb-6 text-gray-600">Analyze your food labels with AI-powered insights.</p>
      <Link href="/upload">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Get Started
        </button>
      </Link>
    </div>
  );
}
