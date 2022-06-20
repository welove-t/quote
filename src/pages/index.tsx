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
import QrCode from "src/components/QrCode";
import { useMantineColorScheme } from "@mantine/core";

const Home: NextPage = () => {
  const { colorScheme } = useMantineColorScheme();
  const themeColor = colorScheme === "light" ? "bg-gray-100" : "bg-slate-800";

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
    <div className={themeColor}>
      <Header themeColor={themeColor} />
      <div className="container pt-20 text-center">
        <br />
        <p className="mb-8 font-zen text-2xl font-bold tracking-widest text-gray-500 md:text-5xl">
          珠玉の一文をカード画像に
        </p>

        <TodayWord themeColor={themeColor} />
        <br />
        <QrCode />
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
        {isWebAPI ? (
          <div className="mt-4 font-bold text-blue-500">対応</div>
        ) : (
          <div className="mt-4 font-bold text-red-500">
            お使いの端末・ブラウザではSNSシェア機能は対応しておりません。
          </div>
        )}

        {/* <div className="mt-8 text-lg font-semibold">今日のワード</div> */}

        {/* <TodayWord themeColor={themeColor} /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
