import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, FileText, HelpCircle, Heart } from 'lucide-react';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Patriotic Sassy Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-orange-500 p-2 rounded-full shadow-lg"
              >
                <Sun className="h-6 w-6 text-yellow-100" />
              </motion.div>
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-orange-500 via-white to-green-600 bg-clip-text text-transparent drop-shadow-md border-b-[3px] border-orange-500" style={{WebkitTextStroke: "1px rgba(0,0,0,0.1)"}}>
                  Surya Ghar
                </span>
                <span className="block text-xs font-bold text-slate-600 tracking-wider">
                  MAKE INDIA AATMANIRBHAR 🇮🇳✨
                </span>
              </div>
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex space-x-8">
              <NavLink to="/" icon={<Sun size={18} />} text="Calculator 💸" />
              <NavLink to="/state-guide" icon={<FileText size={18} />} text="State Subsidies 🗺️" />
              <NavLink to="/faq" icon={<HelpCircle size={18} />} text="FAQs 🤔" />
            </nav>

            {/* Mobile menu button (placeholder for now) */}
            <div className="md:hidden flex items-center">
               <button className="text-orange-500 hover:text-green-600 transition-colors">
                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                 </svg>
               </button>
            </div>
          </div>
        </div>
        {/* Tricolor underline */}
        <div className="h-1 w-full flex">
          <div className="h-full w-1/3 bg-orange-500"></div>
          <div className="h-full w-1/3 bg-white"></div>
          <div className="h-full w-1/3 bg-green-600"></div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t-4 border-green-600 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col items-center"
          >
            <div className="flex items-center space-x-2 text-2xl font-bold mb-4">
               <span className="text-orange-400">Jai</span>
               <span className="text-white">Hind</span>
               <span className="text-green-400">! 🇮🇳</span>
            </div>
            <p className="text-slate-400 max-w-xl mx-auto mb-6">
              Empowering Indian households to generate their own clean energy. Save money, save the planet, and make India proud! ☀️
            </p>
            <div className="flex items-center space-x-1 text-sm text-slate-500 font-medium">
              <span>Made with</span>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.div>
              <span>for a brighter India</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ to, icon, text }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 text-slate-700 hover:text-orange-600 font-semibold tracking-wide transition-all duration-300 relative group"
    >
      <span className="text-orange-500 group-hover:rotate-12 transition-transform duration-300">{icon}</span>
      <span>{text}</span>
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}
