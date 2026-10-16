import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-bold text-purple-950">404</h1>

      <p className="mt-4 text-xl text-gray-600">
        The page you requested could not be found.
      </p>

      <Link
        to="/"
        className="mt-7 rounded-md bg-amber-500 px-6 py-3 font-semibold text-purple-950"
      >
        Return Home
      </Link>
    </main>
  );
}

export default NotFoundPage;