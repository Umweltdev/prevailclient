// /* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface EmployeeCardProps {
  title: string;
  icon: React.ReactNode;
  tasks: string[];
  delay: number;
  isVisible: boolean;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ 
  title, 
  icon, 
  tasks, 
  delay, 
  isVisible 
}) => {
  return (
    <motion.div 
      initial={{y: 50}}
      whileInView={{y: 0}}
      transition={{duration: delay}}
      className={`h-full transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      // style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full border border-white/15 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/15 rounded-2xl group-hover:bg-white/20 transition-colors duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-center mb-4 group-hover:text-blue-200 transition-colors duration-300">
          {title}
        </h3>
        
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li 
              key={index} 
              className="flex items-start transition-all duration-500"
              style={{ transitionDelay: `${delay + (index * 100) + 300}ms` }}
            >
              <CheckCircle className="w-5 h-5 text-green-300 mr-3 flex-shrink-0 mt-0.5" />
              <span className="opacity-90 group-hover:opacity-100 transition-opacity duration-300">{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default EmployeeCard;