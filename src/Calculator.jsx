import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { motion } from 'framer-motion';
import { statesData } from './data/statesData';
import logoUrl from './assets/sesi-logo.png';

const Calculator = () => {
  const [bill, setBill] = useState('');
  const [area, setArea] = useState('');
  const [selectedState, setSelectedState] = useState(statesData[0].name);
  const [submittedArea, setSubmittedArea] = useState('');
  const [submittedBill, setSubmittedBill] = useState('');
  const [submittedState, setSubmittedState] = useState(statesData[0].name);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedArea(area);
    setSubmittedBill(bill);
    setSubmittedState(selectedState);
  };

  // 1 kW = 100 sq ft, 1 kW saves ~₹1000/mo, Base Cost = ₹60,000/kW.
  const areaNum = parseFloat(submittedArea) || 0;
  const billNum = parseFloat(submittedBill) || 0;

  // Realistically we suggest the smaller of what they have space for vs what they need
  // But the requirement says change math logic back to purely calculating maximum solar capacity based on Roof Area (Area / 100)
  const capacityKW = Math.floor(areaNum / 100);

  const baseCost = capacityKW * 60000;

  // Subsidy rules: Up to 2 kW = ₹30,000/kW. Additional capacity up to 3 kW = ₹18,000/kW. Maximum total subsidy cap = ₹78,000.
  let subsidy = 0;
  let breakdown = [];

  if (capacityKW > 0) {
    const tier1KW = Math.min(2, capacityKW);
    const tier1Subsidy = tier1KW * 30000;
    subsidy += tier1Subsidy;
    breakdown.push(`Central: ₹30,000 × ${tier1KW}kW = ₹${tier1Subsidy.toLocaleString('en-IN')}`);

    if (capacityKW > 2) {
      const tier2KW = Math.min(1, capacityKW - 2);
      const tier2Subsidy = tier2KW * 18000;
      subsidy += tier2Subsidy;
      breakdown.push(`Central: ₹18,000 × ${tier2KW}kW = ₹${tier2Subsidy.toLocaleString('en-IN')}`);
    }
  }

  if (subsidy > 78000) {
    subsidy = 78000;
    breakdown.push(`Central Subsidy Capped at Maximum = ₹78,000`);
  }

  // State extra subsidy
  const stateInfo = statesData.find(s => s.name === submittedState);
  const stateExtra = stateInfo ? stateInfo.extraSubsidy : 0;

  if (capacityKW > 0 && stateExtra > 0) {
      subsidy += stateExtra;
      breakdown.push(`State Extra Subsidy (${submittedState}) = ₹${stateExtra.toLocaleString('en-IN')}`);
  }

  const netCost = baseCost - subsidy;
  const potentialSavings = capacityKW * 1000;
  const monthlySavings = billNum > 0 ? Math.min(potentialSavings, billNum) : potentialSavings;
  const breakEvenYears = (monthlySavings > 0) ? (netCost / (monthlySavings * 12)).toFixed(1) : 0;

  const pdfRef = useRef();

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Surya-Ghar-ROI-Report.pdf');
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-orange-500"
    >
      <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-green-600 text-white p-6 flex flex-col items-center text-center relative overflow-hidden">
        {/* Ashoka Chakra watermark background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none scale-150">
           <svg viewBox="0 0 100 100" width="300" height="300">
             <circle cx="50" cy="50" r="48" fill="none" stroke="white" strokeWidth="2" />
             <path d="M50 50 L50 2 M50 50 L50 98 M50 50 L2 50 M50 50 L98 50" stroke="white" strokeWidth="1" />
           </svg>
        </div>

        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          src={logoUrl}
          alt="SESI Mascot"
          className="w-24 h-auto object-contain mb-3 drop-shadow-lg z-10 bg-white/20 p-2 rounded-full backdrop-blur-sm"
        />
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-black z-10 drop-shadow-md"
        >
          🇮🇳 SESI PEC Subsidy Calculator ☀️
        </motion.h2>
        <p className="mt-2 font-medium z-10 drop-shadow-sm">Calculate your path to an Atmanirbhar Bharat! Jai Hind! 🪷</p>
      </div>

      <div className="p-8 flex flex-col md:flex-row gap-8">
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onSubmit={handleSubmit}
          className="flex-1 space-y-6"
        >
          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">Select Your State 🗺️</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            >
              {statesData.map(state => (
                <option key={state.name} value={state.name}>{state.name}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">Monthly Electricity Bill (₹) 💸</label>
            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              placeholder="e.g. 2500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold">Available Roof Area (sq ft) 🏠</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              placeholder="e.g. 350"
            />
            {areaNum > 0 && areaNum < 100 && (
              <p className="text-red-500 text-sm mt-1 font-medium">
                Stop living in a shoebox! 😅 You need at least 100 sq ft for 1 kW.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 text-white font-bold rounded-lg transition-transform transform hover:scale-105 shadow-md bg-gradient-to-r from-orange-500 via-white to-green-500 text-transparent bg-clip-text relative overflow-hidden"
            style={{ WebkitTextFillColor: 'white', backgroundColor: '#333' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-400 to-green-500 opacity-90"></div>
            <span className="relative z-10 text-white drop-shadow-md">Calculate ROI ✨</span>
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex-1 flex flex-col"
        >
          <div ref={pdfRef} className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 flex-1">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4 border-yellow-300">Your Solar ROI ✨</h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Suggested Capacity 💡</span>
              <span className="font-bold text-lg text-gray-800">{capacityKW} kW</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Base Cost 💰</span>
              <span className="font-bold text-lg text-gray-800">₹{baseCost.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-green-600 font-medium">Govt Subsidy 🎁</span>
              <span className="font-bold text-lg text-green-600">- ₹{subsidy.toLocaleString('en-IN')}</span>
            </div>

            <div className="pt-2 border-t border-yellow-300 flex justify-between items-center">
              <span className="text-gray-800 font-bold">Net Cost 📉</span>
              <span className="font-bold text-xl text-orange-600">₹{netCost.toLocaleString('en-IN')}</span>
            </div>

            {breakdown.length > 0 && (
              <div className="bg-gradient-to-r from-orange-50 to-green-50 p-4 rounded-lg border border-gray-200 mt-4 shadow-sm">
                <h4 className="text-sm font-bold text-gray-700 mb-2 border-b border-gray-300 pb-1">Subsidy Breakdown 📊</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {breakdown.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-orange-500">👉</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-white p-3 rounded-lg border border-green-200 mt-4 space-y-2">
              {billNum > 0 && (
                <>
                  <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-1">
                    <span className="text-gray-600">Current Monthly Bill</span>
                    <span className="font-bold text-red-500">₹{billNum.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-1">
                    <span className="text-gray-600">New Estimated Bill</span>
                    <span className="font-bold text-green-600">
                      ₹{Math.max(0, billNum - potentialSavings).toLocaleString('en-IN')}
                    </span>
                  </div>
                </>
              )}
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Monthly Value Generated</span>
                <span className="font-bold text-green-600">~₹{potentialSavings.toLocaleString('en-IN')}</span>
              </div>
              {billNum > 0 && potentialSavings > billNum && (
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Grid Export Earnings</span>
                  <span className="font-bold text-yellow-600">~₹{(potentialSavings - billNum).toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-sm mt-1 pt-1 border-t border-gray-100">
                <span className="text-gray-600">Break-Even Point</span>
                <span className="font-bold text-blue-600">{breakEvenYears} Years 🚀</span>
              </div>
            </div>

            {potentialSavings >= 3000 && (
              <p className="text-sm text-center text-orange-600 font-bold mt-2">
                Wow! Funding the nation's future, one panel at a time! 🇮🇳✨
              </p>
            )}
          </div>
          </div>

          {(capacityKW > 0) && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadPDF}
              className="w-full mt-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>📄 Download PDF Report</span>
            </motion.button>
          )}
        </motion.div>
      </div>
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-3 text-center text-sm font-bold uppercase tracking-widest shadow-inner">
        Vande Mataram • Make India Atmanirbhar! 🇮🇳
      </div>
    </motion.div>
  );
};

export default Calculator;
