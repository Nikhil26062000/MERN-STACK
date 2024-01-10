import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

const ErrorPage = ({ errorCode, errorMessage }) => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold text-red-500 mb-4">Error 404</h2>
      <p className="text-lg text-gray-700 mb-6">OOPS! Something went wrong</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Go back to Home
      </Link>
      {/* Additional content */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">It seems something went wrong.</p>
        <p className="text-gray-600">Don't worry, click the button above to go back to the home page.</p>
        {/* Add more content or information as needed */}
      </div>
    </div>
  );
};

export default ErrorPage;
