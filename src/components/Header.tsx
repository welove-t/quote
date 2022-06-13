import React from "react";

type props = {
  themeColor: string;
};

const Header = ({ themeColor }: props) => {
  return (
    <div style={{ backgroundColor: themeColor }}>
      <header className="container m-0 flex h-16 items-center">
        <span className="text-lg font-semibold text-gray-500">Quote Card</span>
      </header>
    </div>
  );
};

export default Header;
