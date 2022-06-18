import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { CgMoon, CgSun } from "react-icons/Cg";

export const ColorTheme = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "yellow" : "blue"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      className="fixed top-5 right-8"
    >
      {dark ? <CgSun size={18} /> : <CgMoon size={18} />}
    </ActionIcon>
  );
};
