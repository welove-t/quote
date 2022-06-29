import React from "react";
import * as htmlToImage from "html-to-image";
import { ShareIcon } from "@heroicons/react/solid";
import Buttons from "src/components/Buttons";
import { showNotification } from "@mantine/notifications";

type props = {
  themeColor: string;
  isError: boolean;
};

const ShareSM = ({ themeColor, isError }: props) => {
  // web share api
  const webShare = (Src: any) => {
    if (!isError) {
      showNotification({
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
      htmlToImage.toCanvas(src).then(function (canvas) {
        canvas.toBlob(function (blob) {
          if (!blob) return;
          const image = new File([blob], "tmp.png", { type: "image/png" });
          if (navigator.canShare && navigator.canShare({ files: [image] })) {
            navigator
              .share({
                text: "",
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
    <div className="mt-8 flex flex-col">
      <Buttons
        themeColor={themeColor}
        onClickButton={() => {
          webShare("canvas");
        }}
      >
        <ShareIcon className="w-6" />
        <p>カードをシェアする</p>
      </Buttons>
      <p className="mt-8">
        ※Twitterで共有する場合、ツイート前の画面ではカード画像が見切れていることもありますが、ツイート後は正常に表示されます。
        <br />
        見切れてしまったらごめんなさい...。
      </p>
    </div>
  );
};

export default ShareSM;
