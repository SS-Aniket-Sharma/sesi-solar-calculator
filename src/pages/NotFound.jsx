import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="text-center"
      >
        <h1 className="text-9xl font-black text-slate-200 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Oops! Page Not Found 🪫</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          It looks like the page you are looking for has been disconnected from the grid. Let's get you back to safety!
        </p>
        <Link
          to="/"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
        >
          Go Back Home ☀️
        </Link>
      </motion.div>
    </div>
  );
}
