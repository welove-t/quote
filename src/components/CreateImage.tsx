import React, { LegacyRef, useEffect, useState } from "react";

type props = {
  quote: string;
  container: null | LegacyRef<HTMLImageElement>;
};

const width = 255;
const height = 255;

const CreateImage = ({ quote, container }: props) => {
  // canvas用
  const [bgColor, setBgColor] = useState<string>("#888888");
  const [foColor, setFoColor] = useState<string>("#000000");
  const [png, setPng] = useState<string | null>(null);
  const width = 480;
  const height = 270;
  const fontSize = 24;
  const lineHeight = 1.5;

  useEffect(() => {
    const canvasElem = document.createElement("canvas");
    canvasElem.width = width;
    canvasElem.height = height;
    const ctx = canvasElem && canvasElem.getContext("2d");

    if (!canvasElem || !ctx) return;
    // draw
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);
    ctx.font = fontSize + "px Hiragino Maru Gothic Pro";
    ctx.fillStyle = foColor;

    for (let lines = quote.split("\n"), i = 0, l = lines.length; l > i; i++) {
      let line = lines[i];
      let addY = fontSize;
      if (i) addY += fontSize * lineHeight * i;

      ctx.fillText(line, width / 20 + 0, height / 8 + addY);
    }

    setPng(canvasElem.toDataURL());
  }, [bgColor, foColor, quote]);
  return (
    <div className="text-center">
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
      <h4>生成</h4>
      {png && (
        <div className="mx-auto mb-4 sm:h-52 sm:w-96">
          {/* <TweetImage png={png} width={width} height={height} ref={container} /> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="icon"
            src={png}
            height={height}
            width={width}
            className="rounded-lg"
            ref={container}
          />
        </div>
      )}
    </div>
  );
};

export default CreateImage;
