import type { NextPage } from "next";
import { Textarea } from "@mantine/core";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import CreateImage from "src/components/CreateImage";
import html2canvas from "html2canvas";
import QuoteCard from "src/components/QuoteCard";

const Home: NextPage = () => {
  const [quote, setQuote] = useState<string>("");
  const container = useRef(null);

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

  //  クリップボードにコピー
  const getScreenShot = (Src: any) => {
    let src = document.getElementById(Src);
    src &&
      html2canvas(src).then(function (canvas) {
        canvas.toBlob(function (blob) {
          navigator.clipboard
            .write([
              new ClipboardItem(
                Object.defineProperty({}, blob!.type, {
                  value: blob,
                  enumerable: true,
                })
              ),
            ])
            .then(() => {
              // do something
            });
        });
      });
  };
  return (
    <div>
      <Header />
      <div className="container text-center">
        <span>メインコンポーネント</span>
        <br />
        <span>あなたの琴線に触れた引用カードを作ろう！</span>
        <br />
        <span>（引用イメージをカルーセルで表示させる）</span>
        <br />
        <Textarea
          label="Autosize with 4 rows max"
          placeholder="Autosize with 4 rows max"
          autosize
          minRows={2}
          maxRows={4}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
            setQuote(event.target.value);
          }}
        />
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
            <button
              key={color}
              style={{ color }}
              onClick={() => setFoColor(color)}
            >
              A
            </button>
          ))}
        </div>
        <div>
          {/* <CreateImage quote={quote} container={container} /> */}
          {/* <QuoteCard
            quote={quote}
            container={container}
            png={png}
            width={width}
            height={height}
          /> */}
          {png && (
            <div className="mx-auto mb-4 sm:h-52">
              {/* <TweetImage png={png} width={width} height={height} ref={container} /> */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                id="canvas"
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
        <button
          className="my-20 bg-black text-white"
          onClick={() => getScreenShot("canvas")}
        >
          クリップボードにコピー
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
