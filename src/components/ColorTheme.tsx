import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export const ColorTheme = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  useEffect(() => {
    if (colorScheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [colorScheme]);
  return (
    // <ActionIcon
    //   variant="outline"
    //   color={dark ? "yellow" : "blue"}
    //   onClick={() => toggleColorScheme()}
    //   title="Toggle color scheme"
    //   className="fixed top-5 right-8"
    //   size={"md"}
    // >
    <a
      className="fixed top-5 right-8 cursor-pointer border-none bg-none"
      onClick={() => toggleColorScheme()}
    >
      {dark ? (
        <SunIcon className="h-7 w-7 rounded-md border-solid border-yellow-500 text-yellow-500" />
      ) : (
        <MoonIcon className="h-7 w-7 rounded-md border-solid border-blue-500 text-blue-500" />
      )}
    </a>
    // </ActionIcon>
  );
};
