import React, { LegacyRef, useState } from "react";
import QuoteCard from "src/components/QuoteCard";
import { ColorSwatch, Group, useMantineTheme } from "@mantine/core";
import { CheckIcon } from "@heroicons/react/solid";

type props = {
  quote: string;
  source: string;
};

const colorSwatchItem = [
  { select: false, foColor: "#15AABF", bgColor: "bg-cyan-100" }, //ブルー
  { select: false, foColor: "#40C057", bgColor: "bg-green-100" }, //グリーン
  { select: false, foColor: "#FD7E14", bgColor: "bg-orange-100" }, //オレンジ
  { select: false, foColor: "#BE4BDB", bgColor: "bg-purple-100" }, //パープル
  { select: false, foColor: "#FFFFFF", bgColor: "bg-black" }, //ブラック
];

const CreateImage = ({ quote, source }: props) => {
  // ColorSwatch
  const theme = useMantineTheme();
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
