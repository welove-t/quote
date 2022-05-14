import React, { LegacyRef, useEffect, useState } from "react";
import QuoteCard from "src/components/QuoteCard";
import { ColorSwatch, Group, useMantineTheme } from "@mantine/core";

type props = {
  quote: string;
  container: null | LegacyRef<HTMLImageElement>;
};

const CreateImage = ({ quote, container }: props) => {
  // ColorSwatch
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(true);

  // canvas用
  const [bgColor, setBgColor] = useState<string>("#888888");
  const [foColor, setFoColor] = useState<string>("#000000");
  const [png, setPng] = useState<string | null>(null);
  const width = 480;
  const height = 270;
  const fontSize = 24;
  const lineHeight = 1.5;

  // useEffect(() => {
  //   const canvasElem = document.createElement("canvas");
  //   canvasElem.width = width;
  //   canvasElem.height = height;
  //   const ctx = canvasElem && canvasElem.getContext("2d");

  //   if (!canvasElem || !ctx) return;
  //   // draw
  //   ctx.clearRect(0, 0, width, height);
  //   ctx.fillStyle = bgColor;
  //   ctx.fillRect(0, 0, width, height);
  //   ctx.font = fontSize + "px Hiragino Maru Gothic Pro";
  //   ctx.fillStyle = foColor;

  //   for (let lines = quote.split("\n"), i = 0, l = lines.length; l > i; i++) {
  //     let line = lines[i];
  //     let addY = fontSize;
  //     if (i) addY += fontSize * lineHeight * i;

  //     ctx.fillText(line, width / 20 + 0, height / 8 + addY);
  //   }

  //   setPng(canvasElem.toDataURL());
  // }, [bgColor, foColor, quote]);
  return (
    <div className="text-center">
      <Group position="center" spacing="xs" className="mt-10">
        <ColorSwatch
          component="button"
          color={theme.colors.blue[6]}
          onClick={() => {
            setFoColor("#228BE6");
            // setBgColor("#E7F5FF");
            setBgColor("bg-blue-100");
          }}
          style={{ color: "#fff", cursor: "pointer" }}
        >
          {checked && <div>K</div>}
        </ColorSwatch>
        <ColorSwatch
          component="button"
          color={theme.colors.green[6]}
          onClick={() => {
            setFoColor("#40C057");
            // setBgColor("#EBFBEE");
            setBgColor("bg-green-100");
          }}
          style={{ color: "#fff", cursor: "pointer" }}
        >
          {checked && <div>K</div>}
        </ColorSwatch>
        <ColorSwatch
          component="button"
          color={theme.colors.orange[6]}
          onClick={() => {
            setFoColor("#FD7E14");
            // setBgColor("#FFF4E6");
            setBgColor("bg-orange-100");
          }}
          style={{ color: "#fff", cursor: "pointer" }}
        >
          {checked && <div>K</div>}
        </ColorSwatch>
        <ColorSwatch
          component="button"
          color={theme.colors.cyan[6]}
          onClick={() => {
            setFoColor("#15AABF");
            // setBgColor("#E3FAFC");
            setBgColor("bg-cyan-100");
          }}
          style={{ color: "#fff", cursor: "pointer" }}
        >
          {checked && <div>K</div>}
        </ColorSwatch>
        <ColorSwatch
          component="button"
          color={theme.colors.grape[6]}
          onClick={() => {
            setFoColor("#BE4BDB");
            // setBgColor("#F8F0FC");
            setBgColor("bg-purple-100");
          }}
          style={{ color: "#fff", cursor: "pointer" }}
        >
          {checked && <div>K</div>}
        </ColorSwatch>
        <ColorSwatch
          component="button"
          color={theme.colors.red[6]}
          onClick={() => {
            setFoColor("#FA5252");
            // setBgColor("#FFF5F5");
            setBgColor("bg-red-100");
          }}
          style={{ color: "#fff", cursor: "pointer" }}
        >
          {checked && <div>K</div>}
        </ColorSwatch>
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
