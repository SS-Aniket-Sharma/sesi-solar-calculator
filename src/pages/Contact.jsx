import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contacts = [
    { name: "Aniket", role: "President", phone: "+91 77174 73302" },
    { name: "Arvind", role: "Vice President", phone: "+91 76967 37101" },
    { name: "Parth", role: "Technical Lead", phone: "+91 81682 98942" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-800 uppercase tracking-tight mb-4"
          >
            Get In <span className="text-green-600">Touch</span> 📞
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Want to join the movement? Have questions about solar? Reach out to our core team. We're here to build the future of Bharat. 🇮🇳
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-black text-slate-800 mb-6 uppercase border-l-4 border-orange-500 pl-3">Core Team</h2>

            {contacts.map((contact, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center justify-between hover:border-orange-300 transition-colors group">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{contact.name}</h3>
                  <p className="text-orange-600 text-sm font-bold uppercase tracking-wider">{contact.role}</p>
                </div>
                <a
                  href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 bg-slate-50 text-slate-700 px-4 py-2 rounded-full font-medium hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  <Phone size={16} className="text-green-600 group-hover:animate-bounce" />
                  {contact.phone}
                </a>
              </div>
            ))}
          </motion.div>

          {/* Connect & Location */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none"></div>
               <h2 className="text-2xl font-black mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">Connect Online</h2>

               <div className="space-y-4">
                 <a
                   href="https://chat.whatsapp.com/DBiIcCmAKDuC67lYlAQX1J"
                   target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 bg-white/10 hover:bg-green-600/20 p-4 rounded-xl transition-all border border-white/5 hover:border-green-500/50"
                 >
                   <div className="bg-green-500 p-3 rounded-full"><MessageCircle size={24} className="text-white" /></div>
                   <div>
                     <p className="font-bold text-lg">WhatsApp Community</p>
                     <p className="text-slate-300 text-sm">Join our active group discussions</p>
                   </div>
                 </a>

                 <a
                   href="https://instagram.com/sesi_pec"
                   target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-4 bg-white/10 hover:bg-pink-600/20 p-4 rounded-xl transition-all border border-white/5 hover:border-pink-500/50"
                 >
                   <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-3 rounded-full"><Instagram size={24} className="text-white" /></div>
                   <div>
                     <p className="font-bold text-lg">@sesi_pec</p>
                     <p className="text-slate-300 text-sm">Follow our latest updates & events</p>
                   </div>
                 </a>
               </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">Punjab Engineering College</h3>
                <p className="text-slate-600 leading-relaxed">
                  Sector 12, Chandigarh, 160012<br/>
                  India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
