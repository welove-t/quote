import React, { useState } from "react";
import QuoteCard from "src/components/QuoteCard";
import { ColorSwatch, Group, Text } from "@mantine/core";

type props = {
  themeColor: string;
  quote: string;
  source: string;
};

// カラーパターン（文字色：背景色）
const colorSwatchItem = [
  {
    foColor: "text-[#778a99]",
    bgColor: "bg-[#f3f4f6]",
  }, // 薄黒：薄灰
  {
    foColor: "text-[#141517]",
    bgColor: "bg-[#DBC47B]",
  }, // 黒：薄黄
  {
    foColor: "text-[#141517]",
    bgColor: "bg-[#FCA393]",
  }, // 黒：薄赤
  {
    foColor: "text-[#FFFFFF]",
    bgColor: "bg-[#1864AB]",
  }, // 白：濃青
  {
    foColor: "text-[#FFFFFF]",
    bgColor: "bg-[#087F5B]",
  }, // 白：濃緑
  {
    foColor: "text-[#FFFFFF]",
    bgColor: "bg-[#1e293b]",
  }, // 白：黒
];

const CreateImage = ({ themeColor, quote, source }: props) => {
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
  const [cardBgColor, setCardBgColor] = useState<string>(
    colorSwatchItem[0].bgColor
  );
  const [cardFoColor, setCardFoColor] = useState<string>(
    colorSwatchItem[0].foColor
  );

  return (
    <div className="mt-10 text-center">
      <label className="mb-2 font-zen text-2xl font-semibold">
        カラーパターン
      </label>
      <Group position="center" spacing="md" className="mt-4">
        {colorSwatchItem.map((item, index) => (
          <ColorSwatch
            classNames={{
              root: "mb-4",
            }}
            key={index}
            component="button"
            radius={"md"}
            size={40}
            color={item.bgColor.substring(4, 11)}
            onClick={() => {
              setChecked((checked) =>
                !checked[index]
                  ? checked.map((c, i) => index === i && !c)
                  : checked
              );

              setCardBgColor(item.bgColor);
              setCardFoColor(item.foColor);
            }}
            styles={() => ({
              root: { cursor: "pointer" },
            })}
          >
            <Text
              color={item.foColor.substring(6, 13)}
              size={"lg"}
              weight={500}
            >
              A
            </Text>
          </ColorSwatch>
        ))}
      </Group>

      <QuoteCard
        themeColor={themeColor}
        cardBgColor={cardBgColor}
        cardFoColor={cardFoColor}
        quote={quote}
        source={source}
      />
    </div>
  );
};

export default CreateImage;
