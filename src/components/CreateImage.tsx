import React, { useState } from "react";
import QuoteCard from "src/components/QuoteCard";
import { ColorSwatch, Group } from "@mantine/core";
import { CheckIcon } from "@heroicons/react/solid";

type props = {
  quote: string;
  source: string;
};

const colorSwatchItem = [
  { foColor: "#1098AD", bgColor: "#C5F6FA" }, //ブルー
  { foColor: "#37B24D", bgColor: "#D3F9D8" }, //グリーン
  { foColor: "#F76707", bgColor: "#FFE8CC" }, //オレンジ
  { foColor: "#AE3EC9", bgColor: "#F3D9FA" }, //パープル
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
  ]);

  // canvas用
  const [bgColor, setBgColor] = useState<string>(colorSwatchItem[0].bgColor);
  const [foColor, setFoColor] = useState<string>(colorSwatchItem[0].foColor);

  return (
    <div className="text-center">
      <Group position="center" spacing="xs" className="mt-10">
        {colorSwatchItem.map((item, index) => (
          <ColorSwatch
            key={index}
            component="button"
            size={48}
            color={item.foColor}
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
