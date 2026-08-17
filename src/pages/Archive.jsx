import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Image as ImageIcon } from 'lucide-react';

export default function Archive() {
  const archives = [
    {
      id: 1,
      title: "Independence day",
      date: "15 August 2026",
      desc: "Wishing everyone a very Happy 80th Independence Day! Jai Hind! Let's continue building an Atmanirbhar Bharat.",
      type: "Event",
      image: `${import.meta.env.BASE_URL}independence_day.png`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-800 uppercase tracking-tight mb-4"
          >
            SESI <span className="text-orange-500">Archive</span> 🗄️
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-medium"
          >
            A chronological record of our efforts to empower an Atmanirbhar Bharat through renewable energy. 🇮🇳
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {archives.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-xl transition-shadow relative group"
            >
              <div className="h-2 w-full bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded-full uppercase tracking-wide">
                    {item.type}
                  </span>
                  <div className="flex items-center text-slate-400 text-sm font-medium">
                    <Calendar size={14} className="mr-1" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                {item.image ? (
                  <div className="mt-4">
                    <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg shadow-md" />
                  </div>
                ) : (
                  <div className="flex items-center text-orange-500 text-sm font-bold hover:text-orange-600 cursor-pointer">
                    <ImageIcon size={16} className="mr-1" />
                    View Gallery
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
