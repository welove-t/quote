import React from "react";

type props = {
  isError: boolean;
  onClickButton: () => void;
  themeColor: string;
  children: React.ReactNode;
};

const Buttons = ({ isError, onClickButton, themeColor, children }: props) => {
  return (
    <button
      className={`mx-auto flex items-center justify-center space-x-2 rounded-full border-none px-8 py-2 font-semibold text-gray-400 shadow-npConvexButton hover:cursor-pointer hover:shadow-npConcaveButton disabled:cursor-not-allowed disabled:bg-gray-50 ${themeColor}`}
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
