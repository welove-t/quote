import { useMantineColorScheme } from "@mantine/core";

// カラーパターン（ライトモード）（文字色：背景色）
const colorSwatchLightItem = [
  { foColor: "text-gray-600", bgColor: "bg-gray-100" }, // 濃灰：薄灰
  { foColor: "text-gray-600", bgColor: "bg-amber-200" }, // 濃灰：薄黄
  { foColor: "text-gray-600", bgColor: "bg-emerald-200" }, // 濃灰：薄緑
  { foColor: "text-gray-600", bgColor: "bg-sky-200" }, // 濃灰：薄青
];

// カラーパターン（ダークモード）（文字色：背景色）
const colorSwatchDarkItem = [
  { foColor: "text-slate-300", bgColor: "bg-steal-800" }, // 薄灰：濃灰
  { foColor: "text-slate-300", bgColor: "bg-amber-700" }, // 薄灰：濃黄
  { foColor: "text-slate-300", bgColor: "bg-emerald-700" }, // 薄灰：濃緑
  { foColor: "text-slate-300", bgColor: "bg-sky-700" }, // 薄灰：濃青
];

export const SwatchColor = () => {
  const { colorScheme } = useMantineColorScheme();
  const swatchColor =
    colorScheme === "light" ? colorSwatchLightItem : colorSwatchDarkItem;
  return swatchColor;
};
