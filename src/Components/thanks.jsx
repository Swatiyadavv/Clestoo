import React from 'react';
import { Link } from 'react-router-dom';

function Thanks() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white-200 to-purple-300">
    <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          We’ve received your message. Our team will get back to you shortly.
        </p>
        <Link
          to="/Dashboard"
          className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
export default Thanks;
