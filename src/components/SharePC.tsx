import React from "react";
import { showNotification, updateNotification } from "@mantine/notifications";
import {
  ClipboardCopyIcon,
  ChevronDoubleDownIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import { TwitterShareButton, TwitterIcon } from "react-share";
import Buttons from "src/components/Buttons";
import * as htmlToImage from "html-to-image";

type props = {
  themeColor: string;
  isError: boolean;
};

const SharePC = ({ themeColor, isError }: props) => {
  // カードをコピー
  const cardCopy = (Src: any) => {
    if (!isError) {
      updateNotification({
        id: "load-data",
        color: "red",
        message: "文字数が上限を超えています！",
        autoClose: 2000,
        disallowClose: true,
      });
      return;
    }
    let src = document.getElementById(Src);
    src &&
      htmlToImage.toCanvas(src).then((canvas) => {
        canvas.toBlob((blob) => {
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
              updateNotification({
                id: "load-data",
                color: "blue",
                message: "コピーしました！",
                icon: <CheckCircleIcon />,
                autoClose: 2000,
              });
            })
            .catch((e) => {
              alert(e);
              updateNotification({
                id: "load-data",
                color: "red",
                message: "カードのコピーに失敗しました...",
                icon: <XCircleIcon />,
                autoClose: 2000,
              });
            });
        });
      });
  };

  const displayNotirication = () => {
    showNotification({
      id: "load-data",
      loading: true,
      message: "カードをコピーしています...",
      autoClose: false,
      disallowClose: true,
    });
    cardCopy("canvas");
  };

  return (
    <div>
      <div className="hidden sm:mt-8 sm:flex sm:flex-col sm:items-center sm:space-y-4">
        <Buttons
          themeColor={themeColor}
          onClickButton={() => {
            displayNotirication();
          }}
        >
          <ClipboardCopyIcon className="w-6" />
          <p>カードをコピーする</p>
        </Buttons>
        <ChevronDoubleDownIcon className="w-6 animate-pulse text-gray-600" />
        <TwitterShareButton
          url="/"
          hashtags={["QuoteCard"]}
          className={`flex items-center space-x-1 shadow-npConvexButton hover:shadow-npConcaveButton ${themeColor} dark:shadow-darkConvexButton dark:hover:shadow-darkConcaveButton`}
          style={{
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 32,
            paddingRight: 32,
            borderRadius: 9999,
          }}
          disabled={!isError}
        >
          <TwitterIcon size={32} round={true} />
          <p className="font-normal tracking-wider text-gray-600 dark:text-gray-100">
            Twitterで共有する
          </p>
        </TwitterShareButton>
      </div>
      <div className="mt-4 font-bold text-red-500 sm:hidden">
        お使いの端末・ブラウザではSNSシェア機能は対応しておりません。
      </div>
    </div>
  );
};

export default SharePC;
