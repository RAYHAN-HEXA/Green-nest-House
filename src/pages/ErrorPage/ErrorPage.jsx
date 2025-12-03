// src/pages/ErrorPage/ErrorPage.jsx
import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import ohNo from '../../assets/images/oh-no.png';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-base-200 text-center p-5">
      {/* Background image */}
      <img
        src={ohNo}
        alt="Oops"
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
      />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-2xl mb-2">Something went wrong.</p>
        {error?.message && <p className="text-lg mb-4">{error.message}</p>}
        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
