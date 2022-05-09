import type { NextPage } from "next";
import { Textarea } from "@mantine/core";
import React, { ChangeEvent, useRef, useState } from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import CreateImage from "src/components/CreateImage";
import html2canvas from "html2canvas";

const Home: NextPage = () => {
  const [phrase, setPhrase] = useState<string>("");
  const container = useRef(null);
  const getScreenShot = (Src: any) => {
    let src = document.getElementById(Src);
    src &&
      html2canvas(src).then(function (canvas) {
        document.getElementById("canvas")!.appendChild(canvas);
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
            .then(function () {
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
            setPhrase(event.target.value);
          }}
        />
        <div id="canvas">
          <CreateImage phrase={phrase} container={container} />
        </div>
        <button
          className="my-20 bg-black text-white"
          // onClick={() => handleCopy(container.current)}
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
