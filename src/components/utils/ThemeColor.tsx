import { useMantineColorScheme } from "@mantine/core";

export const ThemeColor = () => {
  const { colorScheme } = useMantineColorScheme();
  const themeColor = colorScheme === "light" ? "bg-gray-100" : "bg-slate-800";
  return themeColor;
};
