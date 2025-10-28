import React from 'react';
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-[#f3f4f6] p-5 text-center">
        <h1 className="text-9xl font-bold mb-5">404</h1>
        <h2 className="text-3xl font-bold mb-3">Oops! Page Not Found</h2>
        <p className="text-gray-700 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/"
          className="bg-[#3A59D1] text-white font-bold px-6 py-3 rounded-md">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;