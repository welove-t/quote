import Image from "next/image";
import React from "react";
import { ColorTheme } from "src/components/ColorTheme";
import { useMantineColorScheme } from "@mantine/core";
import { useRouter } from "next/router";

type props = {
  themeColor: string;
};

export const Header = ({ themeColor }: props) => {
  const { colorScheme } = useMantineColorScheme();
  const router = useRouter();
  return (
    <div
      className={`fixed -inset-x-0 top-0 left-0 z-50 border-x-0 border-b-2 border-t-0 border-solid border-gray-200 ${themeColor} dark:border-gray-700`}
    >
      <header className="container flex h-16 items-center justify-center space-x-8">
        <div className="w-40 cursor-pointer md:w-80">
          <Image
            src={
              colorScheme
                ? `/images/logo-quotecard-${colorScheme}.png`
                : `/images/logo-quotecard-light.png`
            }
            height={48}
            width={320}
            layout="responsive"
            alt=""
            onClick={() => router.push("/")}
          ></Image>
        </div>
      </header>
      <ColorTheme />
    </div>
  );
};
