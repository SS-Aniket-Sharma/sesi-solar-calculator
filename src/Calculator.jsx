import React, { useState } from 'react';

const Calculator = () => {
  const [bill, setBill] = useState('');
  const [area, setArea] = useState('');

  // 1 kW = 100 sq ft, 1 kW saves ~₹1000/mo, Base Cost = ₹60,000/kW.
  const billNum = parseFloat(bill) || 0;
  const areaNum = parseFloat(area) || 0;

  let kwFromArea = areaNum / 100;
  let kwFromBill = billNum / 1000;

  // Realistically we suggest the smaller of what they have space for vs what they need
  // But let's just use what they have space for, or a basic math
  // "Use these strict PM Surya Ghar rules: 1 kW = 100 sq ft, 1 kW saves ~₹1000/mo, Base Cost = ₹60,000/kW."
  const capacityKW = Math.floor(areaNum / 100);

  const baseCost = capacityKW * 60000;

  // Subsidy rules: Up to 2 kW = ₹30,000/kW. Additional capacity up to 3 kW = ₹18,000/kW. Maximum total subsidy cap = ₹78,000.
  let subsidy = 0;
  if (capacityKW > 0) {
    if (capacityKW <= 2) {
      subsidy = capacityKW * 30000;
    } else {
      subsidy = 2 * 30000 + Math.min(1, capacityKW - 2) * 18000;
    }
  }

  if (subsidy > 78000) subsidy = 78000;

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
        <div className="flex-1 space-y-6">
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
        </div>

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
