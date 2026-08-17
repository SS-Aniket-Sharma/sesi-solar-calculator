import React from 'react';
import { motion } from 'framer-motion';
import Calculator from '../Calculator';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
           {/* Tricolor overlay */}
           <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-slate-900/90 to-green-600/30 mix-blend-overlay"></div>
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none"></div>
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 uppercase">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                Power Your College.
              </span>
              <span className="block text-white mt-2">
                Power The Nation. 🇮🇳
              </span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium">
              Join the SESI PEC Chapter in making India Atmanirbhar in energy.
              <br className="hidden md:block" /> Reduce imports, embrace solar, and fulfill your Dharma. ☀️
            </p>

            <motion.div
              className="mt-10 flex justify-center gap-4 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg backdrop-blur-sm transition-all transform hover:scale-105 active:scale-95"
              >
                Our Mission 🪷
              </button>
              <button
                onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-orange-500/30 transition-all transform hover:scale-105 active:scale-95"
              >
                Subsidy Calculator 💸
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* India Solar Facts Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800 border-t border-slate-700 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px]"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-[100px]"></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-white uppercase">
               India's Solar Ascent 🌅
             </h2>
             <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-lg">
               The numbers don't lie. Bharat is rapidly becoming a global superpower in renewable energy.
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors"
             >
               <div className="text-4xl font-black text-orange-400 mb-2">5th</div>
               <div className="text-slate-300 font-medium">Globally in Solar Power Capacity</div>
               <div className="mt-4 text-xs text-slate-400 border-t border-white/10 pt-4">As of 2023, India is a top-tier solar player globally.</div>
             </motion.div>
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors"
             >
               <div className="text-4xl font-black text-white mb-2">73+ GW</div>
               <div className="text-slate-300 font-medium">Installed Solar Capacity</div>
               <div className="mt-4 text-xs text-slate-400 border-t border-white/10 pt-4">Massive growth driven by initiatives like PM Surya Ghar.</div>
             </motion.div>
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors"
             >
               <div className="text-4xl font-black text-green-400 mb-2">500 GW</div>
               <div className="text-slate-300 font-medium">Non-Fossil Target by 2030</div>
               <div className="mt-4 text-xs text-slate-400 border-t border-white/10 pt-4">Our national pledge for a sustainable, Atmanirbhar future.</div>
             </motion.div>
           </div>
         </div>
      </section>

      {/* About SESI PEC Section */}
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-bl-full -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-50 rounded-tr-full -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-black text-slate-800 mb-6 border-l-8 border-orange-500 pl-4 uppercase">
                The Stark Reality 🪫
              </h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Did you know? <strong className="text-slate-800">India imports nearly 90% of its energy needs.</strong>
                This massive dependency makes our great nation vulnerable to global shocks and drains our wealth outward.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                As the <strong className="text-orange-600">SESI PEC Chapter</strong>, we believe energy independence is not just an engineering challenge, but a national duty. We are a student-led society under Punjab Engineering College dedicated to driving solar adoption.
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-inner">
                <p className="text-xl font-bold text-slate-800 text-center italic mb-2">
                  "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः"
                </p>
                <p className="text-sm text-slate-500 text-center">
                  Bhagavad Gita 18.45 — "Devoted to one's own duty (Dharma), man attains perfection."
                  <br/>Our Dharma today is building a self-reliant Bharat. 🇮🇳
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-orange-400 via-yellow-400 to-green-500 p-2">
                <div className="w-full h-full bg-slate-900 rounded-[1.3rem] flex flex-col items-center justify-center p-8 text-center text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 opacity-20 bg-orange-500 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 opacity-20 bg-green-500 rounded-full blur-xl"></div>

                  <h3 className="text-3xl font-black mb-4 z-10 text-orange-400">Join The Movement</h3>
                  <p className="text-slate-300 mb-8 z-10 text-lg">Be part of the engineering minds shaping India's solar future at PEC.</p>
                  <a
                    href="https://chat.whatsapp.com/DBiIcCmAKDuC67lYlAQX1J"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="z-10 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
                  >
                    Join WhatsApp Group 💬
                  </a>

                  <div className="mt-8 z-10 text-xs font-bold text-slate-500 uppercase tracking-widest">
                    SESI Punjab Engineering College Chapter
                  </div>
                </div>
              </div>
            </div>
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
