import React, { FC } from 'react';

interface StepsProps {
  steps: string[];
  currentStatus?: string;
  className?:string;
}

export const Steps: FC<StepsProps> = ({ steps, currentStatus ,className}) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      {steps.map((step, index) => {
        const isActive = step === currentStatus;
        return (
          <div key={index} className="flex items-center">
            {index !== 0 && (
              <div className="w-8 h-px bg-black"></div>
            )}
            <div className={`px-4 py-2 ${isActive ? 'font-bold' : ''} bg-white`}>
              {step}
            </div>
          </div>
        );
      })}
    </div>
  );
};

