import React from "react";

type props = {
  onClickButton: () => void;
  themeColor: string;
  children: React.ReactNode;
};

const Buttons = ({ onClickButton, themeColor, children }: props) => {
  return (
    <button
      className={`mx-auto flex items-center justify-center space-x-2 rounded-full border-none px-8 py-2 font-extralight text-gray-600 shadow-npConvexButton hover:cursor-pointer hover:shadow-npConcaveButton dark:text-gray-100 ${themeColor} dark:shadow-darkConvexButton dark:hover:shadow-darkConcaveButton`}
      onClick={() => {
        onClickButton();
      }}
    >
      {children}
    </button>
  );
};

export default Buttons;
