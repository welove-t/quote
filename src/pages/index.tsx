import type { NextPage } from "next";
import { Textarea } from "@mantine/core";
import React, { ChangeEvent, useState } from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import CreateImage from "src/components/CreateImage";

const Home: NextPage = () => {
  const [phrase, setPhrase] = useState<string>("");

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
      </div>
      <div id="canvas">
        <CreateImage phrase={phrase} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
