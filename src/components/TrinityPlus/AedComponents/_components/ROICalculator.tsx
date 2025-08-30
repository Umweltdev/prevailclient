'use client'
import { useState } from "react";
// Component: ROI Calculator
function ROICalculator() {
  const [adSpend, setAdSpend] = useState(10000);
  const [currentROAS, setCurrentROAS] = useState(2);
  
  const withAED = currentROAS * 2; // Conservative 2x improvement
  const savings = (adSpend * withAED) - (adSpend * currentROAS);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Ad Spend
          </label>
          <input
            type="range"
            min="1000"
            max="100000"
            step="1000"
            value={adSpend}
            onChange={(e) => setAdSpend(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="text-center mt-2 text-xl font-bold">${adSpend.toLocaleString()}</div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current ROAS
          </label>
          <input
            type="range"
            min="0.5"
            max="5"
            step="0.1"
            value={currentROAS}
            onChange={(e) => setCurrentROAS(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="text-center mt-2 text-xl font-bold">{currentROAS}x</div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-sm text-gray-600 mb-1">Current Revenue</p>
            <p className="text-2xl font-bold text-gray-900">
              ${(adSpend * currentROAS).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">With AED (Est.)</p>
            <p className="text-2xl font-bold text-green-600">
              ${(adSpend * withAED).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Additional Revenue</p>
            <p className="text-2xl font-bold text-green-600">
              +${savings.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ROICalculator;