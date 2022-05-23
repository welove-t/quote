import React, { useState } from "react";
import QuoteCard from "src/components/QuoteCard";
import { ColorSwatch, Group } from "@mantine/core";
import { CheckIcon } from "@heroicons/react/solid";

type props = {
  quote: string;
  source: string;
};

const colorSwatchItem = [
  { foColor: "#141517", bgColor: "#F1F3F5" }, //グレー
  { foColor: "#1C7ED6", bgColor: "#E7F5FF" }, //ブルー
  { foColor: "#37B24D", bgColor: "#EBFBEE" }, //グリーン
  { foColor: "#F76707", bgColor: "#FFF4E6" }, //オレンジ
  { foColor: "#AE3EC9", bgColor: "#F8F0FC" }, //パープル
  { foColor: "#FFFFFF", bgColor: "#141517" }, //ブラック
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
      <label className="text-lg font-semibold">カラーパターン</label>
      <Group position="center" spacing="md" className="mt-4">
        {colorSwatchItem.map((item, index) => (
          <ColorSwatch
            key={index}
            component="button"
            radius={"md"}
            size={44}
            color={index === 5 ? item.bgColor : item.foColor}
            onClick={() => {
              setChecked((checked) => checked.map((c, i) => index === i && !c));
              setFoColor(item.foColor);
              setBgColor(item.bgColor);
            }}
            style={{ color: "#fff", cursor: "pointer" }}
          >
            {checked[index] && <CheckIcon className="w-6" />}
          </ColorSwatch>
        ))}
      </Group>

      <QuoteCard
        quote={quote}
        source={source}
        bgColor={bgColor}
        foColor={foColor}
      />
    </div>
  );
};

export default CreateImage;
