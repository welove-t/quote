import type { NextPage } from "next";
import { Modal, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { ChangeEvent, useState } from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import CreateImage from "src/components/CreateImage";
import html2canvas from "html2canvas";
import { TwitterShareButton, TwitterIcon } from "react-share";
import {
  ClipboardCopyIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/solid";

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

  // カードを画像として保存
  const saveAsImage = (uri: any) => {
    const downloadLink = document.createElement("a");

    if (typeof downloadLink.download === "string") {
      downloadLink.href = uri;

      // ファイル名
      downloadLink.download = "component.png";

      // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
      document.body.appendChild(downloadLink);

      // ダウンロードリンクが設定された a タグをクリック
      downloadLink.click();

      // Firefox 対策で追加したリンクを削除しておく
      document.body.removeChild(downloadLink);
    } else {
      window.open(uri);
    }
  };
  // カード画像をダウンロード
  const DownloadCardImage = () => {
    // 画像に変換する component の id を指定
    const target = document.getElementById("canvas");
    if (!target) {
      return;
    }
    html2canvas(target).then((canvas) => {
      const targetImgUri = canvas.toDataURL("img/png");
      saveAsImage(targetImgUri);
      setOpenModal(false);
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
            className="mx-auto"
            autosize
            size="md"
            minRows={2}
            maxRows={6}
            maxLength={151}
            {...form.getInputProps("textquote")}
          />
          {form.values.textquote.length > 150 ? (
            <p className="mx-auto text-right text-sm text-red-500">
              あと {150 - form.values.textquote.length} 文字
            </p>
          ) : (
            <p className="mx-auto text-right text-sm text-gray-500">
              あと {150 - form.values.textquote.length} 文字
            </p>
          )}
        </div>
        <div className="mt-10">
          <label className="text-lg font-semibold">引用元</label>
          <TextInput
            label="上記の参照元(人名・書名・登場人物名等)を書いて下さい"
            error={errorTextsource}
            placeholder={`(例1) 夏目漱石『吾輩は猫である』より |  (例2) ワンピース / ルフィ`}
            className="mx-auto"
            size="xs"
            maxLength={51}
            {...form.getInputProps("textsource")}
          />
          {form.values.textsource.length > 50 ? (
            <p className="mx-auto text-right text-sm text-red-500">
              あと {50 - form.values.textsource.length} 文字
            </p>
          ) : (
            <p className="mx-auto text-right text-sm text-gray-500">
              あと {50 - form.values.textsource.length} 文字
            </p>
          )}
        </div>
        <CreateImage
          quote={form.values.textquote}
          source={form.values.textsource}
        />

        <div className="mt-8 flex flex-col items-center space-y-4">
          <button
            className="flex items-center space-x-2 rounded-full border-blue-500 bg-white px-8 py-2 font-semibold text-blue-700 hover:bg-blue-500 hover:text-white"
            onClick={() => getScreenShot("canvas")}
          >
            <ClipboardCopyIcon className="w-6" />
            <p>カードをコピーする</p>
          </button>
          <ChevronDoubleDownIcon className="w-6 animate-pulse text-gray-500" />
          <TwitterShareButton
            url="/"
            hashtags={["QuoteCard"]}
            className="flex items-center space-x-1"
            style={{
              backgroundColor: "#00ACEE",
              paddingTop: 2,
              paddingBottom: 2,
              paddingLeft: 32,
              paddingRight: 32,
              borderRadius: 9999,
            }}
          >
            <TwitterIcon size={32} round={true} />
            <p className="font-semibold text-white">Twitterで共有する</p>
          </TwitterShareButton>

          <button
            className="rounded-xl bg-green-400 px-8 py-4 font-semibold hover:bg-green-500 hover:shadow"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            画像を保存する
          </button>

          <Modal
            opened={openModal}
            onClose={() => setOpenModal(false)}
            title="カードを保存する"
          >
            <p>カードをダウンロードしますか？</p>
            <button
              className="rounded-lg bg-blue-600 px-8 py-4 text-white hover:shadow"
              onClick={() => {
                DownloadCardImage();
              }}
            >
              ダウンロード
            </button>
            <p>※保存形式はpngです</p>
          </Modal>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
