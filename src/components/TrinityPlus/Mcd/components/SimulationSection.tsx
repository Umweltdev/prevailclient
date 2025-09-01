import React, { useState } from 'react';
import { RefreshCw, AlertCircle, ArrowRight, DollarSign, Activity, AlertTriangle } from 'lucide-react';


const SimulationSection = ({ visibleSections }) => {
  const [adSpend, setAdSpend] = useState(5000);
  const [revenue, setRevenue] = useState(15000);
  const [basePrice, setBasePrice] = useState(100);
  const [isSimulating, setIsSimulating] = useState(false);
  
  // Calculate metrics
  const roas = revenue / adSpend;
  const targetRoas = 3.0; // Target ROAS for optimal profitability
  const roasGap = Math.max(0, targetRoas - roas);
  const priceAdjustment = Math.min(15, Math.max(-5, roasGap * 5)); // Cap at 15% increase, 5% decrease
  const adjustedPrice = basePrice * (1 + priceAdjustment / 100);
  const projectedRevenue = revenue * (1 + (priceAdjustment * 0.7) / 100); // Assume 70% retention with price increase
  const newRoas = projectedRevenue / adSpend;
  const profitMargin = ((projectedRevenue - adSpend) / projectedRevenue * 100).toFixed(1);
  const originalMargin = ((revenue - adSpend) / revenue * 100).toFixed(1);
  
  const runSimulation = () => {
    setIsSimulating(true);
    // Simulate declining ROAS over time
    let currentRevenue = 20000;
    const interval = setInterval(() => {
      currentRevenue -= 1000;
      if (currentRevenue < 8000) {
        currentRevenue = 20000; // Reset loop
      }
      setRevenue(currentRevenue);
    }, 500);
    
    setTimeout(() => {
      clearInterval(interval);
      setIsSimulating(false);
      setRevenue(15000); // Reset to default
    }, 5000);
  };
  
  const getRoasColor = (value) => {
    if (value >= 3) return 'text-green-600';
    if (value >= 2) return 'text-yellow-600';
    return 'text-red-600';
  };
  
  const getRoasBg = (value) => {
    if (value >= 3) return 'bg-green-50 border-green-200';
    if (value >= 2) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <section id="simulation" className={`scroll-reveal ${visibleSections.has('simulation') ? 'visible' : ''} py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See MCD <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how MCD automatically adjusts prices when your ROAS changes. Try adjusting your ad spend and revenue to see real-time price optimization.
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Controls */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Your Marketing Metrics</h3>
              
              <div>
                <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Monthly Ad Spend
                  </span>
                  <span className="text-blue-600 font-semibold">${adSpend.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  disabled={isSimulating}
                />
              </div>
              
              <div>
                <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    Revenue from Ads
                  </span>
                  <span className="text-green-600 font-semibold">${revenue.toLocaleString()}</span>
                </label>
                <input
                  type="range"
                  min="5000"
                  max="50000"
                  step="1000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  disabled={isSimulating}
                />
              </div>
              
              <div>
                <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Base Product Price</span>
                  <span className="font-semibold">${basePrice}</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={basePrice}
                  onChange={(e) => setBasePrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  disabled={isSimulating}
                />
              </div>
              
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSimulating 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {isSimulating ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Simulating ROAS Decline...
                  </>
                ) : (
                  <>
                    <Activity className="w-5 h-5" />
                    Simulate Declining ROAS
                  </>
                )}
              </button>
            </div>
            
            {/* Right Side - Results */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">MCD Response</h3>
              
              {/* ROAS Indicator */}
              <div className={`p-4 rounded-xl border-2 ${getRoasBg(roas)}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Current ROAS</span>
                  {roas < 2.5 && <AlertTriangle className="w-5 h-5 text-yellow-600" />}
                </div>
                <div className={`text-3xl font-bold ${getRoasColor(roas)}`}>
                  {roas.toFixed(2)}x
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {roas >= 3 ? 'Healthy' : roas >= 2 ? 'Below Target' : 'Critical - Needs Optimization'}
                </div>
              </div>
              
              {/* Price Adjustment */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl">
                <div className="text-sm font-medium text-gray-600 mb-2">MCD Price Adjustment</div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-gray-900">
                    ${basePrice.toFixed(2)}
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <div className="text-2xl font-bold text-blue-600">
                    ${adjustedPrice.toFixed(2)}
                  </div>
                  <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                    priceAdjustment > 0 ? 'bg-green-100 text-green-700' : 
                    priceAdjustment < 0 ? 'bg-red-100 text-red-700' : 
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {priceAdjustment > 0 ? '+' : ''}{priceAdjustment.toFixed(1)}%
                  </span>
                </div>
              </div>
              
              {/* Impact Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Original Margin</div>
                  <div className="text-xl font-bold text-gray-900">{originalMargin}%</div>
                </div>
                <div className="bg-green-50 p-4 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">New Margin</div>
                  <div className="text-xl font-bold text-green-600">{profitMargin}%</div>
                </div>
              </div>
              
              {/* Explanation */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900">
                    {roas >= 3 ? (
                      <span>Your ROAS is healthy. MCD maintains current pricing to maximize volume while protecting margins.</span>
                    ) : roas >= 2 ? (
                      <span>ROAS is below target. MCD gradually increases price by {priceAdjustment.toFixed(1)}% to restore profitability without shocking customers.</span>
                    ) : (
                      <span>Critical ROAS detected. MCD implements a {priceAdjustment.toFixed(1)}% price adjustment to protect margins while monitoring demand elasticity.</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Stats Bar */}
          <div className="mt-8 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-sm text-gray-600">Ad Spend ROI</div>
              <div className="text-lg font-bold text-gray-900">{((revenue - adSpend) / adSpend * 100).toFixed(0)}%</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Profit per Sale</div>
              <div className="text-lg font-bold text-gray-900">${((adjustedPrice - (adSpend/revenue * adjustedPrice))).toFixed(2)}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Break-even ROAS</div>
              <div className="text-lg font-bold text-gray-900">1.43x</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Margin Gain</div>
              <div className="text-lg font-bold text-green-600">+{(parseInt(profitMargin) - parseInt(originalMargin)).toFixed(1)}%</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            This simulation shows real-time price optimization based on your actual marketing performance.
          </p>
          <p className="text-gray-500 mt-2">
            MCD makes these adjustments automatically, 24/7, across all your products.
          </p>
        </div>
      </div>
      
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          cursor: pointer;
          border-radius: 50%;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        
        .slider::-moz-range-thumb:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default SimulationSection;