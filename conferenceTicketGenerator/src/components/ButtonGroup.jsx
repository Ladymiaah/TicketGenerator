import React from "react";

const ButtonGroup = ({
  onCancelClick,
  onNextClick,
  cancelText = "Cancel",
  nextText = "Next",
}) => {
  return (
    <div className="flex w-full flex-col md:flex-row gap-4">
      <button
        className="basis-[50%] h-[48px] px-4 border border-[#24A0B5] rounded-xl text-[#197686] text-base font-JejuMyeongjo bg-transparent hover:bg-[#24A0B5]/20 transition p-2"
        onClick={onCancelClick}
      >
        {cancelText}
      </button>
      <button
        className="flex-1 h-[48px] px-4 rounded-xl text-[#FFFFF] text-base font-JejuMyeongjo bg-[#2BA4B9] hover:bg-[#1F7E8A] disabled:bg-gray-500 transition p-2"
        onClick={onNextClick}
      >
        {nextText}
      </button>
    </div>
  );
};

export default ButtonGroup;
