import React from "react";

const ProgressBar = ({ title, currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100; // Calculate progress %

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <p className="text-[32px] font-JejuMyeongjo">{title}</p>
        <p className="text-base text-[#FFFFFF] font-Roboto">
          Step {currentStep}/{totalSteps}
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="w-full bg-[#0E464F] h-[4px] rounded-[5px] mt-2">
        <div
          className="bg-[#24A0B5] h-[4px] rounded-[5px] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
