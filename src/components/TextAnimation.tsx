import { ReactElement, useCallback, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

type Props = {
  children: React.ReactNode;
  section: string;
};

export const TextAnimation = ({ children, section }: Props): ReactElement => {
  const textRef = useCallback((node) => {
    if (node !== null) {
      const text = node.innerHTML; //テキストを読み込む
      const rText = text.replace(/\n/g, "<br>");
      const height = node.clientHeight; //高さを取得する
      node.innerHTML = ""; //テキストを削除する
      node.style.height = height + "px"; //高さを設定する
      setAnimation(rText);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setAnimation = (text: string) => {
    const numText = text.length;
    const selector = "#" + section;
    gsap.registerPlugin(TextPlugin);
    gsap.to(`${selector} .animation-text`, {
      duration: numText * 0.08,
      text: {
        value: text,
      },
      ease: "none",
    });
  };

  return (
    <div
      ref={textRef}
      className="animation-text"
      style={{ whiteSpace: "pre-wrap" }}
    >
      {children}
    </div>
  );
};
