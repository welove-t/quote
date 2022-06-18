import { useMantineTheme } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import React from "react";
import { ColorTheme } from "src/components/ColorTheme";

type props = {
  themeColor: string;
};

const Header = ({ themeColor }: props) => {
  return (
    <div
      style={{ backgroundColor: themeColor }}
      className="fixed -inset-x-0 top-0 left-0 z-50 border-b border-solid border-gray-200"
    >
      <header className="container flex h-16 items-center justify-center space-x-8">
        <span className="text-2xl font-semibold text-gray-500">Quote Card</span>
      </header>
      <ColorTheme />
    </div>
  );
};

export default Header;
