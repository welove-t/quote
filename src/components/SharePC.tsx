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
  const clipboardCopy = (Src: string) => {
    let src = document.getElementById(Src);

    // htmlToImage.toCanvas(src).then((canvas) => {
    //   canvas.toBlob((blob) => {
    //     navigator.clipboard
    //       .write([
    //         new ClipboardItem(
    //           Object.defineProperty({}, blob!.type, {
    //             value: blob,
    //             enumerable: true,
    //           })
    //         ),
    //       ])
    //       .then(() => {
    //         console.log("コピー成功！");
    //       })
    //       .catch((e) => {
    //         console.log("コピー失敗...");
    //       });
    //   });
    // });

    try {
      // chrome仕様
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
                console.log("コピー成功！");
              })
              .catch((e) => {
                console.log("コピー失敗...");
              });
          });
        });
    } catch {
      // safari仕様
      src &&
        htmlToImage.toSvg(src).then((svg) => {
          navigator.clipboard
            .write([
              new ClipboardItem({
                "text/plain": new Promise(async (resolve) => {
                  resolve(new Blob([svg], { type: "text/plain" }));
                }),
              }),
            ])
            .then(() => {
              console.log("コピー成功！");
            })
            .catch((e) => {
              console.log("コピー失敗...");
            });
        });
    }
  };

  const displayNotirication = () => {
    // showNotification({
    //   id: "load-data",
    //   loading: true,
    //   message: "カードをコピーしています...",
    //   autoClose: false,
    //   disallowClose: true,
    // });
    clipboardCopy("canvas");
  };

  return (
    <div className="hidden sm:mt-8 sm:flex sm:flex-col sm:items-center sm:space-y-4">
      <Buttons
        isError={isError}
        themeColor={themeColor}
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
        <p className="font-semibold text-gray-400">Twitterで共有する</p>
      </TwitterShareButton>
    </div>
  );
};

export default SharePC;
