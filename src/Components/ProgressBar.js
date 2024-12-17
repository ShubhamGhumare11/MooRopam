import React from 'react';
import { FaEnvelope, FaPhone, FaKey, FaHome, FaShoppingCart, FaMoneyCheckAlt, FaCheck } from 'react-icons/fa'; // Import icons

const ProgressBar = ({ currentStep }) => {
  const totalSteps = 5;

  // Icon mapping for each step
  const stepIcons = [
    <FaEnvelope />, // Step 1: Email
    <FaPhone />,    // Step 2: Phone
    <FaHome />,     // Step 4: Address
    <FaShoppingCart />, // Step 5: Summary
    <FaMoneyCheckAlt />, // Step 6: Payment
  ];

  return (
    <div className="relative mb-8">
      <ol className="flex items-center w-full">
        {Array.from({ length: totalSteps }, (_, index) => {
          const step = index + 1;
          const isCompleted = step < currentStep;
          const isCurrent = step === currentStep;

          return (
            <li
              key={step}
              className={`flex w-full items-center ${
                step !== totalSteps ? 'after:content-[\'\'] after:w-full after:h-1 after:border-b after:inline-block' : ''
              } ${isCompleted ? 'text-green-600 after:border-green-300' : 'after:border-gray-200'}`}
            >
              <span
                className={`flex items-center justify-center w-10 h-10 lg:h-12 lg:w-12 rounded-full shrink-0 ${
                  isCompleted
                    ? 'bg-green-100 text-green-600'
                    : isCurrent
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {isCompleted ? (
                  <FaCheck className="w-5 h-5" /> // Checkmark for completed steps
                ) : (
                  stepIcons[index] // Icon for current/future steps
                )}
              </span>
            </li>
          );
        })}
      </ol>
      <div className="absolute top-0 right-0 text-xs text-gray-500">
        {currentStep} / {totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;
