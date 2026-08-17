import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { statesData } from '../data/statesData';
import { ExternalLink, Zap, Info, ChevronDown } from 'lucide-react';

export default function StateGuide() {
  const [expandedState, setExpandedState] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStates = statesData.filter(state =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 drop-shadow-sm">
          State-wise Subsidy Guide 🗺️
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Find out exactly how much additional benefit your state offers on top of the <span className="font-bold text-orange-500">₹78,000</span> Central PM Surya Ghar subsidy!
        </p>

        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search for your state..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-orange-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none text-lg shadow-md transition-all"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredStates.map((state, index) => (
            <StateCard
              key={state.name}
              state={state}
              index={index}
              isExpanded={expandedState === state.name}
              onToggle={() => setExpandedState(expandedState === state.name ? null : state.name)}
            />
          ))}
        </AnimatePresence>
      </div>

      {filteredStates.length === 0 && (
        <div className="text-center py-12">
           <p className="text-2xl text-slate-400 font-bold">No state found matching "{searchTerm}" 😢</p>
        </div>
      )}
    </div>
  );
}

function StateCard({ state, index, isExpanded, onToggle }) {
  const hasExtra = state.extraSubsidy > 0 || state.generationIncentive;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={`bg-white rounded-2xl shadow-lg border-t-4 overflow-hidden flex flex-col ${hasExtra ? 'border-orange-500' : 'border-slate-300'}`}
    >
      <div
        className="p-6 cursor-pointer hover:bg-slate-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slate-800 pr-4">{state.name}</h3>
          {hasExtra ? (
            <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full flex items-center shrink-0">
              <Zap size={12} className="mr-1" /> Extra Benefit
            </span>
          ) : (
            <span className="bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full shrink-0">
              Central Only
            </span>
          )}
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-slate-500 mb-1">Max State Top-up</p>
            {state.generationIncentive ? (
              <p className="text-lg font-black text-green-600">{state.generationIncentive}</p>
            ) : (
              <p className={`text-2xl font-black ${hasExtra ? 'text-green-600' : 'text-slate-400'}`}>
                ₹{state.maxStateSubsidy.toLocaleString('en-IN')}
              </p>
            )}
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-slate-50 border-t border-slate-100"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3 text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-200">
                <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <p>{state.notes}</p>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Supported DISCOMs</p>
                <div className="flex flex-wrap gap-2">
                  {state.discoms.map(discom => (
                    <span key={discom} className="bg-white border border-slate-200 text-slate-600 text-xs px-2 py-1 rounded-md">
                      {discom}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={state.portalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-xl font-bold transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Visit State Portal <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
