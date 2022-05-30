import type { NextPage } from "next";
import { Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import CreateImage from "src/components/CreateImage";
import html2canvas from "html2canvas";
import { TwitterShareButton, TwitterIcon } from "react-share";
import {
  ClipboardCopyIcon,
  ChevronDoubleDownIcon,
  CheckCircleIcon,
  XCircleIcon,
  ShareIcon,
} from "@heroicons/react/solid";
import { TextRemaining } from "src/components/TextRemaining";
import { showNotification, updateNotification } from "@mantine/notifications";

const Home: NextPage = () => {
  const form = useForm({
    initialValues: {
      textquote: "",
      textsource: "",
    },
  });
  const errorTextquote = form.values.textquote.length > 150 ? "error" : null;
  const errorTextsource = form.values.textsource.length > 50 ? "error" : null;

  const [isWebAPI, setIsWebAPI] = useState(false);

  // WebAPIShareに対応しているかどうか検知
  useEffect(() => {
    console.log(!navigator.canShare);
    if (!navigator.canShare) {
      setIsWebAPI(false);
    } else {
      setIsWebAPI(true);
    }
  }, []);
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
              setTimeout(() => {
                updateNotification({
                  id: "load-data",
                  color: "blue",
                  message: "コピーしました！",
                  icon: <CheckCircleIcon />,
                  autoClose: 2000,
                });
              }, 1000);
            })
            .catch((e) => {
              alert(e);
              setTimeout(() => {
                updateNotification({
                  id: "load-data",
                  color: "red",
                  message: "カードのコピーに失敗しました...",
                  icon: <XCircleIcon />,
                  autoClose: 2000,
                });
              }, 1000);
            });
        });
      });
  };

  // web share api
  const webShare = (Src: any) => {
    let src = document.getElementById(Src);
    src &&
      html2canvas(src).then(function (canvas) {
        canvas.toBlob(function (blob) {
          if (!blob) return;
          const image = new File([blob], "tmp.png", { type: "image/png" });
          if (navigator.canShare && navigator.canShare({ files: [image] })) {
            navigator
              .share({
                text: "アプリ連携無しで画像がシェアできました！",
                url: "/",
                files: [image],
              })
              .then(() => {
                console.log("Share was successful.");
              })
              .catch((error) => {
                console.log("Sharing failed", error);
              });
          } else {
            console.log("この端末はWebShareAPIには対応していません！！！");
          }
        });
      });
  };

  return (
    <div>
      <Header />
      <div className="container text-center">
        {isWebAPI ? (
          <div className="font-bold text-blue-500">対応</div>
        ) : (
          <div className="font-bold text-red-500">
            お使いの端末・ブラウザは”Web Share API Level2”に対応していません。
          </div>
        )}
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
            placeholder="(例) 吾輩は猫である。名前はまだ無い。"
            className="mx-auto"
            autosize
            size="md"
            minRows={2}
            maxRows={6}
            maxLength={151}
            {...form.getInputProps("textquote")}
          />
          {form.values.textquote.length > 150 ? (
            <TextRemaining
              color="red-500"
              count={150 - form.values.textquote.length}
            />
          ) : (
            <TextRemaining
              color="gray-500"
              count={150 - form.values.textquote.length}
            />
          )}
        </div>
        <div className="mt-10">
          <label className="text-lg font-semibold">引用元</label>
          <TextInput
            label="上記の参照元(人名・書名・登場人物名等)を書いて下さい"
            error={errorTextsource}
            placeholder="(例) 夏目漱石『吾輩は猫である』より"
            className="mx-auto"
            size="md"
            maxLength={51}
            {...form.getInputProps("textsource")}
          />
          {form.values.textsource.length > 50 ? (
            <TextRemaining
              color="red-500"
              count={50 - form.values.textsource.length}
            />
          ) : (
            <TextRemaining
              color="gray-500"
              count={50 - form.values.textsource.length}
            />
          )}
        </div>
        <CreateImage
          quote={form.values.textquote}
          source={form.values.textsource}
        />

        <div className="mt-8 flex flex-col items-center space-y-4">
          <button
            className="flex items-center space-x-2 rounded-full border-blue-500 bg-white px-8 py-2 font-semibold text-blue-700 hover:bg-blue-500 hover:text-white"
            onClick={() => {
              showNotification({
                id: "load-data",
                loading: true,
                message: "カードをコピーしています...",
                autoClose: false,
                disallowClose: true,
              });
              getScreenShot("canvas");
            }}
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
            className="flex items-center space-x-2 rounded-full border-none bg-green-600 px-8 py-2 font-semibold text-white hover:cursor-pointer hover:bg-green-700 hover:shadow"
            onClick={() => {
              webShare("canvas");
            }}
          >
            <ShareIcon className="w-6" />
            <p>カードをシェアする</p>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
