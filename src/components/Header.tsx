import Link from "next/link";
import React from "react";
import { ColorTheme } from "src/components/ColorTheme";

type props = {
  themeColor: string;
};

export const Header = ({ themeColor }: props) => {
  return (
    <div
      className={`fixed -inset-x-0 top-0 left-0 z-50 border-x-0 border-b-2 border-t-0 border-solid border-gray-200 ${themeColor} dark:border-gray-700`}
    >
      <header className="container flex h-16 items-center justify-center space-x-8">
        <Link href="/">
          <a className="text-2xl font-semibold text-gray-600 no-underline dark:text-gray-100">
            Quote Card
          </a>
        </Link>
      </header>
      <ColorTheme />
    </div>
  );
};
