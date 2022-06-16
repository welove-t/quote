import { ReactElement, useCallback } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {
  children: React.ReactNode;
  section: string;
};

const TextAnimation = (props: Props): ReactElement => {
  const textRef = useCallback((node) => {
    if (node !== null) {
      const text = node.innerHTML; //テキストを読み込む
      const height = node.clientHeight; //高さを取得する
      node.innerHTML = ""; //テキストを削除する
      node.style.height = height + "px"; //高さを設定する
      setAnimation(text);
    }
  }, []);

  const setAnimation = (text: string) => {
    const numText = text.length;
    const selector = "#" + props.section;

    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
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
      {props.children}
    </div>
  );
};

export default TextAnimation;

export const test = () => {};
