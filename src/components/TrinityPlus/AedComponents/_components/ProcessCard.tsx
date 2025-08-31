/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRight } from "lucide-react";
import React, { ReactElement } from "react";

// Component: Process Card
interface Process {
    step: string,
    title: string,
    description: string;
    icon: ReactElement,
    details: string[]
}
const ProcessCard: React.FC<Process> = ({ step, title, description, icon, details }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-4xl font-bold text-gray-200">#{step}</span>
        <div className="text-blue-600">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {details.map((detail: any, i: any) => (
          <li key={i} className="text-sm text-gray-600 flex items-start">
            <ChevronRight className="w-4 h-4 text-blue-600 mr-1 flex-shrink-0 mt-0.5" />
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProcessCard;