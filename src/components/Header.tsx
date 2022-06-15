import React from "react";

type props = {
  themeColor: string;
};

const Header = ({ themeColor = "#F3F3F3" }: props) => {
  return (
    <div
      style={{ backgroundColor: themeColor }}
      className="fixed -inset-x-0 top-0 left-0 z-50 border-b border-solid border-gray-200"
    >
      <header className="container flex h-16 items-center justify-center">
        <span className="text-2xl font-semibold text-gray-500">Quote Card</span>
      </header>
    </div>
  );
};

export default Header;
