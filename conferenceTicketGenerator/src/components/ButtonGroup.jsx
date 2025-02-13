import React from "react";

const ButtonGroup = ({
  onCancelClick,
  onNextClick,
  cancelText = "Cancel",
  nextText = "Next",
}) => {
  return (
    <div className="flex space-x-4 w-full">
      <button
        className="flex-1 w-[266px] h-[48px] px-4 border border-[#24A0B5] rounded-xl text-[#197686] text-base font-JejuMyeongjo bg-transparent hover:bg-[#24A0B5]/20 transition"
        onClick={onCancelClick}
      >
        {cancelText}
      </button>
      <button
        className="flex-1 w-[266px] h-[48px] px-4 rounded-xl text-[#FFFFF] text-base font-JejuMyeongjo bg-[#2BA4B9] hover:bg-[#1F7E8A] disabled:bg-gray-500 transition"
        onClick={onNextClick}
      >
        {nextText}
      </button>
    </div>
  );
};

export default ButtonGroup;
