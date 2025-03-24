
import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: string;
  change?: number;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  color = "bg-white", 
  change,
  className = ""
}) => {
  return (
    <div className={`cricket-card ${color} ${className} p-6 animate-scale-in`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="mt-2 text-3xl font-semibold">{value}</p>
          
          {change !== undefined && (
            <div className={`mt-2 flex items-center text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              <span>{change >= 0 ? '+' : ''}{change}%</span>
              <span className="ml-2">from previous</span>
            </div>
          )}
        </div>
        
        {icon && (
          <div className="p-3 rounded-full bg-gray-100/80">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
