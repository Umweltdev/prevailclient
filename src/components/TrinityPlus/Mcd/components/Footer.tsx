import { Shield, Lock } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
     <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-4xl font-bold mb-8 gradient-text">MCD</div>
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-8 text-gray-400">
            <div className="flex items-center gap-2 justify-center">
              <Lock className="w-5 h-5" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Shield className="w-5 h-5" />
              <span>GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Lock className="w-5 h-5" />
              <span>Bank-Level Encryption</span>
            </div>
          </div>
          <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
            Your pricing data never leaves your control. MCD operates on your infrastructure, ensuring complete data sovereignty.
          </p>
          <p className="text-gray-400 mb-8">
            Questions? Talk to a pricing strategist: <span className="text-blue-400 font-semibold">team@mcd-pricing.com</span>
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 MCD - Marketing Cost Displacement. All rights reserved.
          </p>
        </div>
    </footer>
  )
}

export default Footer