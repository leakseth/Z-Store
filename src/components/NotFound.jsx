import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-pink-500 mb-4">404</h1>
      <p className="text-gray-700 mb-6">Page not found!</p>
      <Link to="/" className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:opacity-90 transition">
        Go Shop
      </Link>
    </div>
  );
}

export default NotFound;
