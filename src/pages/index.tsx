import type { NextPage } from "next";
import { Textarea } from "@mantine/core";
import Link from "next/link";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
const width = 255;
const height = 255;

const Home: NextPage = () => {
  const container = useRef(null);
  const [phrase, setPhrase] = useState<string>("");
  const [isAddPhrase, setIsAddPhrase] = useState(0);
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

    for (let lines = phrase.split("\n"), i = 0, l = lines.length; l > i; i++) {
      let line = lines[i];
      let addY = fontSize;
      if (i) addY += fontSize * lineHeight * i;

      ctx.fillText(line, width / 20 + 0, height / 8 + addY);
    }

    setPng(canvasElem.toDataURL());
  }, [bgColor, foColor, phrase]);

  return (
    <div>
      <div className=" bg-blue-800">
        <header className="container m-0 flex h-16 items-center">
          <span className=" text-lg text-white">Quote Card</span>
        </header>
      </div>
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
            setPhrase(event.target.value);
          }}
        />
      </div>
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
        <h4>生成</h4>
        {png && (
          <div className="mx-auto mb-4 sm:h-52 sm:w-96">
            {/* <TweetImage png={png} width={width} height={height} ref={container} /> */}
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
      <div className="mb-40 bg-gray-100 pt-10 pb-80">
        <div className="container">
          <div className="flex justify-center space-x-4">
            <Link href="/">
              <a className="text-gray-600">利用規約</a>
            </Link>
            <Link href="/">
              <a className="text-gray-600">プライバシーポリシー</a>
            </Link>
          </div>
          <div className="pt-4 text-center">
            <Link href="/">
              <a className="text-gray-600">当サービスの開発者</a>
            </Link>
            <p className="pt-4">&copy; QuoteCard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
