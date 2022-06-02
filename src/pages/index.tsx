import type { NextPage } from "next";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import Header from "src/components/Header";
import Footer from "src/components/Footer";
import CreateImage from "src/components/CreateImage";
import TodayWord from "src/components/TodayWord";
import SharePC from "src/components/SharePC";
import ShareSM from "src/components/ShareSM";
import QuoteText from "src/components/QuoteText";
import QuoteCite from "src/components/QuoteCite";

const Home: NextPage = () => {
  const form = useForm({
    initialValues: {
      textQuote: "",
      textCite: "",
    },
  });

  const textQuote = form.values.textQuote;
  const textCite = form.values.textCite;

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
        <div className="text-lg font-semibold">今日のワード</div>

        <TodayWord />
        <br />
        <QuoteText
          textQuote={textQuote}
          textQuoteGetInputProps={form.getInputProps("textQuote")}
        />
        <QuoteCite
          textCite={textCite}
          textCiteGetInputProps={form.getInputProps("textCite")}
        />
        <CreateImage quote={textQuote} source={textCite} />
        <SharePC />
        <ShareSM />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
