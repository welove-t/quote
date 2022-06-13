import type { NextPage } from "next";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import TodayWord from "src/components/TodayWord";
import SharePC from "src/components/SharePC";
import ShareSM from "src/components/ShareSM";
import QuoteText from "src/components/QuoteText";
import QuoteCite from "src/components/QuoteCite";
import QuoteCard from "src/components/QuoteCard";

const Home: NextPage = () => {
  const themeColor = "#F3F3F3";

  const form = useForm({
    initialValues: {
      textQuote: "",
      textCite: "",
    },
  });

  // 引用文
  const textQuote = form.values.textQuote;
  const textQuoteLength = textQuote.length;
  const maxTextQuote: number = 120;
  const [isCheckedLengthQuote, setIsCheckedLengthQuote] = useState(true);

  // 引用元
  const textCite = form.values.textCite;
  const textCiteLength = textCite.length;
  const maxTextCite: number = 50;
  const [isCheckedLengthCite, setIsCheckedLengthCite] = useState(true);

  // 引用文・引用元の文字数チェック
  useEffect(() => {
    textQuoteLength > maxTextQuote
      ? setIsCheckedLengthQuote(() => false)
      : setIsCheckedLengthQuote(() => true);
    textCiteLength > maxTextCite
      ? setIsCheckedLengthCite(() => false)
      : setIsCheckedLengthCite(() => true);
  }, [textQuoteLength, textCiteLength]);

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

  return (
    <div style={{ backgroundColor: themeColor }}>
      <Header themeColor={themeColor} />
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
        <div className="text-lg font-semibold">今日のワード</div>

        <TodayWord themeColor={themeColor} />
        <br />
        <QuoteText
          themeColor={themeColor}
          textQuote={textQuote}
          textLength={textQuoteLength}
          maxLength={maxTextQuote}
          isLength={isCheckedLengthQuote}
          textQuoteGetInputProps={form.getInputProps("textQuote")}
        />
        <QuoteCite
          themeColor={themeColor}
          textCite={textCite}
          textLength={textCiteLength}
          maxLength={maxTextCite}
          isLength={isCheckedLengthCite}
          textCiteGetInputProps={form.getInputProps("textCite")}
        />
        <QuoteCard
          themeColor={themeColor}
          quote={textQuote}
          source={textCite}
        />
        <SharePC
          themeColor={themeColor}
          isError={isCheckedLengthQuote && isCheckedLengthCite}
        />
        <ShareSM
          themeColor={themeColor}
          isError={isCheckedLengthQuote && isCheckedLengthCite}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
