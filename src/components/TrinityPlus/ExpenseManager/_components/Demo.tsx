'use client'
import React, {useEffect, useState} from 'react'
import {  Play, Pause, RefreshCw, Gamepad2 } from 'lucide-react';

function Demo() {
    const [demoRunning, setDemoRunning] = useState(false);
    const [demoDay, setDemoDay] = useState(1);

  useEffect(() => {
    if (demoRunning && demoDay < 30) {
      const demoInterval = setTimeout(() => {
        setDemoDay(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(demoInterval);
    }
  }, [demoRunning, demoDay]);
  return (
    <section className="py-20 border-t" id='demo'>
        <div className="container mx-auto px-6">
            <div 
                className={`text-center mb-20 transform transition-all duration-1000 ease-out`}
                >
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl backdrop-blur-sm border border-purple-400/30 relative">
                    <Gamepad2 className="w-8 h-8 text-purple-400 animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                    </div>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight gap-2">
                    <span className="text-slate-900">
                        Try Demo
                    </span>
                    <span className="block gradient-text animate-pulse">
                        See Trinity in Action
                    </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                    Trinity follows battle-tested financial principles that adapt to your unique situation
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-8 rounded-full"></div>
                </div>

            <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-8 border border-gray-700">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Sarah&lsquo;s Marketing Agency</h3>
                <div className="flex gap-2">
                <button 
                    onClick={() => setDemoRunning(!demoRunning)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                    {demoRunning ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button 
                    onClick={() => {setDemoDay(1); setDemoRunning(false)}}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                >
                    <RefreshCw size={20} />
                </button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Daily Capacity</div>
                <div className="text-2xl font-bold text-white">£100</div>
                <div className="text-sm text-green-400">After regular bills</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Available Today</div>
                <div className="text-2xl font-bold text-cyan-400">
                    £{Math.max(20, 100 - (demoDay * 3))}
                </div>
                <div className="text-sm text-gray-400">Min reserve: £20</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-sm text-gray-400 mb-1">Day</div>
                <div className="text-2xl font-bold text-white">{demoDay} of 30</div>
                <div className="text-sm text-gray-400">Current month</div>
                </div>
            </div>

            <div className="space-y-4">
                <div className={`bg-gradient-to-r ${demoDay >= 14 ? 'from-green-500/20 to-green-600/20' : 'from-yellow-500/20 to-orange-500/20'} rounded-lg p-4 transition-all duration-500`}>
                <div className="flex justify-between items-center">
                    <div>
                    <div className="text-white font-bold">Office Rent</div>
                    <div className="text-sm text-gray-400">Due: Day 14</div>
                    </div>
                    <div className="text-right">
                    <div className="text-xl font-bold text-white">£1,400</div>
                    <div className="text-sm text-green-400">
                        {demoDay >= 14 ? 'PAID' : `Accumulating: £${Math.min(1400, demoDay * 100)}`}
                    </div>
                    </div>
                </div>
                <div className="mt-2 bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-500"
                    style={{ width: `${Math.min(100, (demoDay / 14) * 100)}%` }}
                    />
                </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4">
                <div className="flex justify-between items-center">
                    <div>
                    <div className="text-white font-bold">New Laptop</div>
                    <div className="text-sm text-gray-400">Due: Day 30</div>
                    </div>
                    <div className="text-right">
                    <div className="text-xl font-bold text-white">£1,500</div>
                    <div className="text-sm text-yellow-400">Using savings (£2/day penalty)</div>
                    </div>
                </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                <div className="flex justify-between items-center">
                    <div>
                    <div className="text-white font-bold">Client Event</div>
                    <div className="text-sm text-gray-400">Due: Day 45</div>
                    </div>
                    <div className="text-right">
                    <div className="text-xl font-bold text-white">£2,000</div>
                    <div className="text-sm text-purple-400">20% daily subscription active</div>
                    </div>
                </div>
                </div>
            </div>

            <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="text-cyan-400">
                {demoDay < 14 
                    ? "Trinity is accumulating £100/day for rent. Other expenses handled via alternatives."
                    : demoDay === 14
                    ? "Rent paid! Trinity now reallocates daily capacity to other needs."
                    : "With rent paid, Trinity focuses on rebuilding savings and maintaining subscriptions."}
                </p>
            </div>
            </div>
        </div>
        </section>
  )
}

export default Demo