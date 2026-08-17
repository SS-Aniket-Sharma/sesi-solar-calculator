import React, { useState } from 'react';

const Calculator = () => {
  const [bill, setBill] = useState('');
  const [area, setArea] = useState('');
  const [submittedArea, setSubmittedArea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedArea(area);
  };

  // 1 kW = 100 sq ft, 1 kW saves ~₹1000/mo, Base Cost = ₹60,000/kW.
  const areaNum = parseFloat(submittedArea) || 0;

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
    breakdown.push(`₹30,000 × ${tier1KW}kW = ₹${tier1Subsidy.toLocaleString('en-IN')}`);

    if (capacityKW > 2) {
      const tier2KW = Math.min(1, capacityKW - 2);
      const tier2Subsidy = tier2KW * 18000;
      subsidy += tier2Subsidy;
      breakdown.push(`₹18,000 × ${tier2KW}kW = ₹${tier2Subsidy.toLocaleString('en-IN')}`);
    }
  }

  if (subsidy > 78000) {
    subsidy = 78000;
    breakdown.push(`Capped at Maximum = ₹78,000`);
  }

  const netCost = baseCost - subsidy;
  const monthlySavings = capacityKW * 1000;
  const breakEvenYears = (monthlySavings > 0) ? (netCost / (monthlySavings * 12)).toFixed(1) : 0;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-orange-500">
      <div className="bg-orange-500 text-white p-6 text-center">
        <h2 className="text-3xl font-bold">🇮🇳 PM Surya Ghar Subsidy Calculator ☀️</h2>
        <p className="mt-2 opacity-90">Light up your home, power the nation! Jai Hind! 🪷</p>
      </div>

      <div className="p-8 flex flex-col md:flex-row gap-8">
        <form onSubmit={handleSubmit} className="flex-1 space-y-6">
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
        </form>

        <div className="flex-1 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
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

            <div className="bg-white p-3 rounded-lg border border-green-200 mt-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Monthly Savings</span>
                <span className="font-bold text-green-600">~₹{monthlySavings.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center text-sm mt-1">
                <span className="text-gray-600">Break-Even Point</span>
                <span className="font-bold text-blue-600">{breakEvenYears} Years 🚀</span>
              </div>
            </div>

            {monthlySavings >= 3000 && (
              <p className="text-sm text-center text-orange-600 font-bold mt-2">
                Wow! Funding the nation's future, one panel at a time! 🇮🇳✨
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="bg-green-600 text-white p-2 text-center text-sm font-semibold">
        Make India Atmanirbhar! 🇮🇳
      </div>
    </div>
  );
};

export default Calculator;
