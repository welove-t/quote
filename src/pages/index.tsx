import type { NextPage } from "next";
import { Modal, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { ChangeEvent, useState } from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import CreateImage from "src/components/CreateImage";
import html2canvas from "html2canvas";

const Home: NextPage = () => {
  const [source, setSource] = useState<string>("");
  const [openModal, setOpenModal] = useState(false);

  const form = useForm({
    initialValues: {
      textquote: "",
    },
  });
  const errorTextquote = form.values.textquote.length > 255 ? "error" : null;
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
              setOpenModal(true);
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
          // label="Autosize with 4 rows max"
          error={errorTextquote}
          placeholder="引用文を書いてください！(255文字まで)"
          className="mx-auto w-96"
          autosize
          size="md"
          minRows={2}
          maxRows={6}
          maxLength={256}
          {...form.getInputProps("textquote")}
        />
        <TextInput
          placeholder="人名、書名等(50文字まで)"
          className="mx-auto w-96"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setSource(event.target.value);
          }}
        />
        <CreateImage quote={form.values.textquote} source={source} />

        <Modal
          opened={openModal}
          onClose={() => setOpenModal(false)}
          title="Introduce yourself!"
        >
          クリップボードにコピーされました！ 早速Twitterで共有しましょう！
        </Modal>
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
