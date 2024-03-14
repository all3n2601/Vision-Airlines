import React from 'react';
import { FaPlane, FaUser, FaCreditCard, FaCheckCircle } from 'react-icons/fa';

const steps = [
  { key: 'select-flight', name: 'Select Flight', icon: <FaPlane className="text-lg" /> },
  { key: 'passenger-details', name: 'Passenger Details', icon: <FaUser className="text-lg" /> },
  { key: 'payment', name: 'Payment', icon: <FaCreditCard className="text-lg" /> },
];

const StepIcon = ({ isCurrent, isCompleted }) => {
  if (isCompleted) {
    return <FaCheckCircle className="text-green-500" />;
  }

  return (
    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isCurrent ? 'bg-[#101935ee] text-white' : 'bg-gray-200 text-gray-600'}`}>
      {isCurrent || isCompleted ? <FaCheckCircle /> : null}
    </div>
  );
};

const PageIndicator = ({ currentPage }) => {
  const checkStepStatus = (stepKey) => {
    const currentIndex = steps.findIndex(step => step.key === currentPage);
    const stepIndex = steps.findIndex(step => step.key === stepKey);
    return {
      isCurrent: stepKey === currentPage,
      isCompleted: stepIndex < currentIndex,
    };
  };

  return (
    <div className="bg-white py-4 shadow">
      <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        {steps.map((step, index) => {
          const { isCurrent, isCompleted } = checkStepStatus(step.key);
          return (
            <div key={step.key} className="flex items-center">
              <div className="flex items-center">
                <StepIcon isCurrent={isCurrent} isCompleted={isCompleted} />
                <span className={`ml-2 ${isCurrent ? 'text-[#050404ee] font-semibold' : 'text-gray-600'}`}>{step.name}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-auto border-t-2 transition duration-500 ease-in-out" style={{ borderColor: isCompleted ? '#3182ce' : '#cbd5e0' }}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PageIndicator;
