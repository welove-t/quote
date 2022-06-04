import React from "react";
import html2canvas from "html2canvas";
import { ShareIcon } from "@heroicons/react/solid";

type props = {
  isError: boolean;
};

const ShareSM = ({ isError }: props) => {
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
    <div className="mt-8 flex flex-col sm:hidden">
      <button
        className="mx-auto flex items-center justify-center space-x-2 rounded-full border-none bg-green-600 px-8 py-2 font-semibold text-white hover:cursor-pointer hover:bg-green-700 hover:shadow"
        onClick={() => {
          webShare("canvas");
        }}
        disabled={!isError}
      >
        <ShareIcon className="w-6" />
        <p>カードをシェアする</p>
      </button>
      <p className="mt-8">
        ※Twitterで共有する場合、ツイート前の画面ではカード画像が見切れていることもありますが、ツイート後は正常に表示されます。
        <br />
        見切れてしまったらごめんなさい...。
      </p>
    </div>
  );
};

export default ShareSM;
