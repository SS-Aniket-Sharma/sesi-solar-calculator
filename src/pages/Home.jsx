import React from 'react';
import { motion } from 'framer-motion';
import Calculator from '../Calculator';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-slate-900 to-green-600/20 mix-blend-overlay"></div>
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                Power Your Home.
              </span>
              <span className="block text-white mt-2">
                Power The Nation. 🇮🇳
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium">
              Calculate your PM Surya Ghar subsidies, discover state-wise bonuses, and see exactly how much you'll save by switching to solar today.
            </p>

            <motion.div
              className="mt-10 flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <button
                onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-500/30 transition-all transform hover:scale-105 active:scale-95"
              >
                Calculate Now 💸
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.6 }}
           >
             <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-black text-slate-800">
                 The Ultimate ROI Calculator ✨
               </h2>
               <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
                 Find out exactly how much central and state subsidies you qualify for, and see your investment returns in real-time.
               </p>
             </div>

             {/* The Calculator Component */}
             <div className="flex justify-center">
                <div className="w-full max-w-5xl">
                   <Calculator />
                </div>
             </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
