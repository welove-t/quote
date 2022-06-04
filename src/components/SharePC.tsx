import React from "react";
import html2canvas from "html2canvas";
import { showNotification, updateNotification } from "@mantine/notifications";
import {
  ClipboardCopyIcon,
  ChevronDoubleDownIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/solid";
import { TwitterShareButton, TwitterIcon } from "react-share";
import Buttons from "src/components/Buttons";

type props = {
  isError: boolean;
};

const SharePC = ({ isError }: props) => {
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

  const displayNotirication = () => {
    showNotification({
      id: "load-data",
      loading: true,
      message: "カードをコピーしています...",
      autoClose: false,
      disallowClose: true,
    });
    getScreenShot("canvas");
  };

  return (
    <div className="hidden sm:mt-8 sm:flex sm:flex-col sm:items-center sm:space-y-4">
      <Buttons
        isError={isError}
        bgColor="blue"
        onClickButton={() => {
          displayNotirication();
        }}
      >
        <ClipboardCopyIcon className="w-6" />
        <p>カードをコピーする</p>
      </Buttons>
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
        disabled={!isError}
      >
        <TwitterIcon size={32} round={true} />
        <p className="font-semibold text-white">Twitterで共有する</p>
      </TwitterShareButton>
    </div>
  );
};

export default SharePC;
