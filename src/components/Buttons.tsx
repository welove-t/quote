import React from "react";

type props = {
  isError: boolean;
  onClickButton: () => void;
  bgColor: string;
  children: React.ReactNode;
};

const Buttons = ({ isError, onClickButton, bgColor, children }: props) => {
  return (
    <button
      className="mx-auto flex items-center justify-center space-x-2 rounded-full border-none bg-[#daecec] px-8 py-2 font-semibold text-gray-400 shadow-npConvexButton hover:cursor-pointer hover:shadow-npConcaveButton disabled:cursor-not-allowed disabled:bg-gray-500"
      onClick={() => {
        onClickButton();
      }}
      disabled={!isError}
    >
      {children}
    </button>
  );
};

export default Buttons;
