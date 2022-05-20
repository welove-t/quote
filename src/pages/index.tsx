import type { NextPage } from "next";
import { Modal, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { ChangeEvent, useState } from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import CreateImage from "src/components/CreateImage";
import html2canvas from "html2canvas";
import { TwitterShareButton, TwitterIcon } from "react-share";

const Home: NextPage = () => {
  const [source, setSource] = useState<string>("");
  const [openModal, setOpenModal] = useState(false);

  const form = useForm({
    initialValues: {
      textquote: "",
      textsource: "",
    },
  });
  const errorTextquote = form.values.textquote.length > 150 ? "error" : null;
  const errorTextsource = form.values.textsource.length > 50 ? "error" : null;
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
        <span>あなたの琴線に触れた名言・名セリフをカード画像にしよう！</span>
        <br />
        <span>（引用イメージをカルーセルで表示させる）</span>
        <br />
        <div className="mt-10">
          <label className="text-lg font-semibold">引用文</label>
          <Textarea
            label="お気に入りのフレーズを書いて下さい"
            error={errorTextquote}
            placeholder={`(例1) 吾輩は猫である。名前はまだ無い。\n(例2) 海賊王に、俺はなる!!!!`}
            className="mx-auto w-96"
            autosize
            size="md"
            minRows={2}
            maxRows={6}
            maxLength={151}
            {...form.getInputProps("textquote")}
          />
        </div>
        <div className="mt-10">
          <label className="text-lg font-semibold">引用元</label>
          <TextInput
            label="上記の参照元(人名・書名・登場人物名等)を書いて下さい"
            error={errorTextsource}
            placeholder={`(例1) 夏目漱石『吾輩は猫である』より |  (例2) ワンピース / ルフィ`}
            className="mx-auto w-96"
            size="xs"
            maxLength={51}
            {...form.getInputProps("textsource")}
          />
        </div>
        <CreateImage
          quote={form.values.textquote}
          source={form.values.textsource}
        />

        <Modal
          opened={openModal}
          onClose={() => setOpenModal(false)}
          title="Introduce yourself!"
        >
          <p>
            クリップボードにコピーされました！ 早速Twitterで共有しましょう！
          </p>
          <TwitterShareButton url="/" hashtags={["QuoteCard"]}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
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
