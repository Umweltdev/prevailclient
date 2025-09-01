'use client'
import React from 'react'
import { AlertCircle } from 'lucide-react'

function Problems() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-12 border border-gray-200 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="animate-fade-in">
              <h2 className="text-4xl font-extrabold gradient-text mb-6">
                The Hidden Business Killer
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                <span className="text-pink-500 font-bold">82% of businesses fail </span> 
                due to cash flow problems, not lack of profitability.
              </p>
              <p className="text-gray-600 mb-6">
                You might have £50,000 coming next month, but if payroll is tomorrow and 
                you&lsquo;re short £5,000, you&lsquo;re facing disaster. Traditional accounting shows you 
                the past. Bank balances show you today. Neither shows you tomorrow.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <AlertCircle className="text-pink-500" size={20} />
                  <span className="text-gray-700">Surprise expenses destroy planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="text-purple-500" size={20} />
                  <span className="text-gray-700">Money tied up in wrong places</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="text-cyan-500" size={20} />
                  <span className="text-gray-700">Emergency loans eat profits</span>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative animate-slide-up">
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="gradient-text font-bold mb-4">Without Trinity:</h3>
                <div className="space-y-4">
                  <div className="bg-cyan-100/50 rounded-lg p-4">
                    <div className="text-sm text-gray-500">Monday</div>
                    <div className="text-gray-900">Bank Balance: £8,000</div>
                    <div className="text-green-600">Feeling good!</div>
                  </div>
                  <div className="bg-purple-100/50 rounded-lg p-4">
                    <div className="text-sm text-gray-500">Friday</div>
                    <div className="text-gray-900">Payroll Due: £6,000</div>
                    <div className="text-yellow-600">Getting nervous...</div>
                  </div>
                  <div className="bg-pink-100/50 rounded-lg p-4 animate-pulse-soft">
                    <div className="text-sm text-gray-500">Next Monday</div>
                    <div className="text-gray-900">Rent + Supplier: £4,000</div>
                    <div className="text-pink-600 font-semibold">
                      CRISIS! Only £2,000 left!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Problems


// 'use client'
// import React from 'react'
// import { 
//   AlertCircle,
// } from 'lucide-react';

// function Problems() {
//   return (
//     <section className="py-20 relative">
//         <div className="container mx-auto px-6">
//           <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur rounded-3xl p-12 border border-red-500/20">
//             <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div>
//                 <h2 className="text-4xl font-bold text-white mb-6">
//                   The Hidden Business Killer
//                 </h2>
//                 <p className="text-gray-300 mb-4 text-lg">
//                   <span className="text-red-400 font-bold">82% of businesses fail</span> due to cash flow problems, 
//                   not lack of profitability.
//                 </p>
//                 <p className="text-gray-300 mb-6">
//                   You might have £50,000 coming next month, but if payroll is tomorrow and you&lsquo;re short £5,000, 
//                   you&lsquo;re facing disaster. Traditional accounting shows you the past. 
//                   Bank balances show you today. Neither shows you tomorrow.
//                 </p>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-3">
//                     <AlertCircle className="text-red-400" size={20} />
//                     <span className="text-gray-300">Surprise expenses destroy planning</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <AlertCircle className="text-red-400" size={20} />
//                     <span className="text-gray-300">Money tied up in wrong places</span>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <AlertCircle className="text-red-400" size={20} />
//                     <span className="text-gray-300">Emergency loans eat profits</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="relative">
//                 <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-red-500/30">
//                   <h3 className="text-white font-bold mb-4">Without Trinity:</h3>
//                   <div className="space-y-4">
//                     <div className="bg-red-500/10 rounded-lg p-4">
//                       <div className="text-sm text-gray-400">Monday</div>
//                       <div className="text-white">Bank Balance: £8,000</div>
//                       <div className="text-green-400">Feeling good!</div>
//                     </div>
//                     <div className="bg-red-500/20 rounded-lg p-4">
//                       <div className="text-sm text-gray-400">Friday</div>
//                       <div className="text-white">Payroll Due: £6,000</div>
//                       <div className="text-yellow-400">Getting nervous...</div>
//                     </div>
//                     <div className="bg-red-500/30 rounded-lg p-4">
//                       <div className="text-sm text-gray-400">Next Monday</div>
//                       <div className="text-white">Rent + Supplier: £4,000</div>
//                       <div className="text-red-400">CRISIS! Only £2,000 left!</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//   )
// }

// export default Problems