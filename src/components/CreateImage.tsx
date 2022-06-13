import React, { useState } from "react";
import QuoteCard from "src/components/QuoteCard";
import { ColorSwatch, Group, Text } from "@mantine/core";

type props = {
  quote: string;
  source: string;
};

// カラーパターン（文字色：背景色）
const colorSwatchItem = [
  { foColor: "#778a99", bgColor: "#f1f4f7" }, // 薄黒：薄灰
  { foColor: "#141517", bgColor: "#DBC47B" }, // 黒：薄黄
  { foColor: "#141517", bgColor: "#FCA393" }, // 黒：薄赤
  { foColor: "#FFFFFF", bgColor: "#1864AB" }, // 白：濃青
  { foColor: "#FFFFFF", bgColor: "#087F5B" }, // 白：濃緑
  { foColor: "#FFFFFF", bgColor: "#141517" }, // 白：黒
];

const CreateImage = ({ quote, source }: props) => {
  // ColorSwatch用
  const [checked, setChecked] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  // canvas用
  const [bgColor, setBgColor] = useState<string>(colorSwatchItem[0].bgColor);
  const [foColor, setFoColor] = useState<string>(colorSwatchItem[0].foColor);

  return (
    <div className="mt-10 text-center">
      <label className="text-lg font-semibold">Quote Card</label>
      {/* <Group position="center" spacing="md" className="mt-4">
        {colorSwatchItem.map((item, index) => (
          <ColorSwatch
            key={index}
            component="button"
            radius={"md"}
            size={checked[index] ? 48 : 40}
            color={item.bgColor}
            onClick={() => {
              setChecked((checked) =>
                !checked[index]
                  ? checked.map((c, i) => index === i && !c)
                  : checked
              );
              setFoColor(item.foColor);
              setBgColor(item.bgColor);
            }}
            styles={() => ({
              root: { cursor: "pointer" },
            })}
          >
            <Text color={item.foColor} size={"lg"} weight={500}>
              A
            </Text>
          </ColorSwatch>
        ))}
      </Group> */}

      {/* <QuoteCard
        quote={quote}
        source={source}
        // bgColor={bgColor}
        // foColor={foColor}
      /> */}
    </div>
  );
};

export default CreateImage;
