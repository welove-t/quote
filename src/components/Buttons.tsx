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
      className={`mx-auto flex items-center justify-center space-x-2 rounded-full border-none bg-${bgColor}-600 px-8 py-2 font-semibold text-white hover:cursor-pointer hover:bg-${bgColor}-700 hover:shadow disabled:cursor-not-allowed disabled:bg-gray-500`}
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
