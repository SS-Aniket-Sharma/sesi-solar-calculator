import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is the PM Surya Ghar Muft Bijli Yojana?",
    answer: "It is a flagship central government scheme launched by PM Narendra Modi to provide up to 300 units of free electricity every month to 1 crore households by installing rooftop solar panels. It offers massive subsidies (up to ₹78,000) directly to citizens' bank accounts."
  },
  {
    question: "How is the Central Subsidy calculated?",
    answer: "For a system up to 2 kW, you get ₹30,000 per kW. For the 3rd kW, you get an additional ₹18,000. So, the maximum central subsidy is capped at ₹78,000 for a 3 kW system or above."
  },
  {
    question: "Do I get extra subsidy from my state?",
    answer: "It depends! Some states like Uttar Pradesh, Gujarat, and Rajasthan offer an additional state-level top-up on top of the ₹78,000 central subsidy. Check our 'State Subsidies' page to see exactly what your state offers."
  },
  {
    question: "How long does it take to get the subsidy amount?",
    answer: "Once the solar plant is installed, inspected, and the net meter is commissioned by your local DISCOM, the subsidy amount is usually credited to your bank account via Direct Benefit Transfer (DBT) within 30 days."
  },
  {
    question: "What is the minimum roof area required?",
    answer: "You generally need about 100 square feet of shadow-free roof space per 1 kW of solar capacity. So, a 3 kW system requires roughly 300 square feet."
  },
  {
    question: "Can I sell excess electricity back to the grid?",
    answer: "Yes! With a net meter installed, any excess electricity your panels generate during the day is exported to the grid. Your DISCOM will adjust this against your nighttime usage, and if you generate more than you consume overall, they will credit your account based on state tariffs."
  }
];

export default function FAQ() {
  return (
    <div className="py-20 px-4 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center p-4 bg-orange-100 text-orange-600 rounded-full mb-6">
          <MessageCircle size={40} />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
          Frequently Asked Questions 🤔
        </h1>
        <p className="text-xl text-slate-600">
          Everything you need to know about lighting up your home with the PM Surya Ghar Yojana.
        </p>
      </motion.div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} />
        ))}
      </div>

      <div className="mt-16 text-center">
         <p className="text-slate-500 font-medium">Still have questions? Check the official portal at <a href="https://pmsuryaghar.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">pmsuryaghar.gov.in</a> 🇮🇳</p>
      </div>
    </div>
  );
}

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-lg text-slate-800 pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-orange-500 shrink-0"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
