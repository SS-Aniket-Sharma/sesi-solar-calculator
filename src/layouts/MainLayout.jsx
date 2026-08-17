import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Heart, MessageCircle, Instagram } from 'lucide-react';
import sesiLogo from '../assets/sesi-pec-logo.png';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Patriotic Sassy Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img src={sesiLogo} alt="SESI Logo" className="h-12 w-auto drop-shadow-md" />
              <div>
                <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-orange-500 via-slate-800 to-green-600 bg-clip-text text-transparent drop-shadow-sm border-b-[3px] border-orange-500">
                  SESI PEC CHAPTER
                </span>
                <span className="block text-xs font-bold text-slate-600 tracking-wider mt-0.5">
                  POWERING AN AATMANIRBHAR BHARAT 🇮🇳✨
                </span>
              </div>
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink to="/" icon={<Sun size={18} />} text="Home 🏠" />
              <NavLink to="/archive" icon={<span role="img" aria-label="Archive">🗄️</span>} text="Archive" />
              <NavLink to="/contact" icon={<span role="img" aria-label="Contact">📞</span>} text="Contact Us" />
              <a
                href="https://chat.whatsapp.com/DBiIcCmAKDuC67lYlAQX1J"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-green-600 hover:text-green-700 font-bold bg-green-50 px-3 py-1.5 rounded-full border border-green-200 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                <span>Join WhatsApp</span>
              </a>
              <a
                href="https://instagram.com/sesi_pec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-pink-600 hover:text-pink-700 font-bold bg-pink-50 px-3 py-1.5 rounded-full border border-pink-200 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                <Instagram size={18} />
                <span>@sesi_pec</span>
              </a>
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
      <footer className="bg-slate-900 text-white py-12 border-t-4 border-orange-500 relative overflow-hidden">
        {/* Subtle Ashoka Chakra background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Sun className="w-96 h-96 text-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col items-center"
          >
            <div className="flex items-center space-x-2 text-3xl font-black mb-4">
               <span className="text-orange-500">Jai</span>
               <span className="text-white">Hind</span>
               <span className="text-green-500">! 🇮🇳</span>
            </div>
            <p className="text-slate-300 max-w-xl mx-auto mb-6 font-medium">
              Solar Energy Society of India (SESI) - Punjab Engineering College Chapter. <br/>
              Leading the charge towards a self-reliant, energy-independent Bharat. ☀️
            </p>

            <div className="flex space-x-4 mb-8">
              <a href="https://chat.whatsapp.com/DBiIcCmAKDuC67lYlAQX1J" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-green-600 transition-colors p-3 rounded-full text-white">
                <MessageCircle size={24} />
              </a>
              <a href="https://instagram.com/sesi_pec" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-pink-600 transition-colors p-3 rounded-full text-white">
                <Instagram size={24} />
              </a>
            </div>

            <div className="flex space-x-4 mb-8 text-sm font-medium text-slate-300">
               <Link to="/archive" className="hover:text-orange-500 transition-colors">Archive</Link>
               <span>|</span>
               <Link to="/contact" className="hover:text-orange-500 transition-colors">Contact Us</Link>
            </div>

            <div className="flex items-center space-x-1 text-sm text-slate-400 font-medium border-t border-slate-700/50 pt-6 w-full justify-center">
              <span>Made with</span>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                <Heart className="h-4 w-4 text-orange-500 fill-current mx-1" />
              </motion.div>
              <span>for our Motherland. 🪷</span>
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
