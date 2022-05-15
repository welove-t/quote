import React, { LegacyRef, useEffect, useState } from "react";
import QuoteCard from "src/components/QuoteCard";
import { ColorSwatch, Group, useMantineTheme } from "@mantine/core";

type props = {
  quote: string;
  container: null | LegacyRef<HTMLImageElement>;
};

const colorSwatchItem = [
  { select: true, foColor: "#228BE6", bgColor: "bg-blue-100" },
  { select: false, foColor: "#40C057", bgColor: "bg-green-100" },
  { select: false, foColor: "#FD7E14", bgColor: "bg-orange-100" },
  { select: false, foColor: "#15AABF", bgColor: "bg-cyan-100" },
  { select: false, foColor: "#BE4BDB", bgColor: "bg-purple-100" },
  { select: false, foColor: "#FA5252", bgColor: "bg-red-100" },
];

const CreateImage = ({ quote, container }: props) => {
  // ColorSwatch
  const theme = useMantineTheme();
  const [checked, setChecked] = useState<boolean[]>([
    true,
    false,
    false,
    false,
    false,
    false,
  ]);

  // canvas用
  const [bgColor, setBgColor] = useState<string>("#888888");
  const [foColor, setFoColor] = useState<string>("#000000");
  const [png, setPng] = useState<string | null>(null);
  const width = 480;
  const height = 270;
  const fontSize = 24;
  const lineHeight = 1.5;

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
            {checked[index] && <div>A</div>}
          </ColorSwatch>
        ))}
      </Group>
      <h3>画像生成</h3>
      <h4>背景色</h4>
      {["#f00", "#0f0", "#00f"].map((color) => (
        <button
          key={color}
          style={{ background: color }}
          onClick={() => setBgColor(color)}
        >
          {color}
        </button>
      ))}
      <h4>文字色</h4>
      {["#000000", "#ffffff", "#00f"].map((color) => (
        <button key={color} style={{ color }} onClick={() => setFoColor(color)}>
          A
        </button>
      ))}

      <QuoteCard quote={quote} bgColor={bgColor} foColor={foColor} />
    </div>
  );
};

export default CreateImage;
