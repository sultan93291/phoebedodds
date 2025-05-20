import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
