import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <h1 className="text-6xl md:text-8xl font-extrabold text-red-600 mb-4">404</h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 text-center">
                Oops! The page you are looking for does not exist.
            </p>
            <Link to="/">
                <button className="btn btn-primary px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition transform">
                    Go Back Home
                </button>
            </Link>
            
        </div>
    );
};

export default ErrorPage;