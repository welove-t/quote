import type { NextPage } from "next";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import TodayWord from "src/components/TodayWord";
import SharePC from "src/components/SharePC";
import ShareSM from "src/components/ShareSM";
import QuoteText from "src/components/QuoteText";
import QuoteCite from "src/components/QuoteCite";
import QuoteCard from "src/components/QuoteCard";
import QrCode from "src/components/QrCode";
import { ThemeColor } from "src/components/utils/ThemeColor";
import { MainLayout } from "src/components/layouts/MainLayout";

const Home: NextPage = () => {
  const themeColor = ThemeColor();

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
      <MainLayout themeColor={themeColor}>
        <div className="container pt-6 text-center md:pt-16">
          <br />
          <p className="mb-8 font-zen text-4xl font-bold leading-relaxed tracking-widest text-gray-500 dark:text-gray-100 sm:flex sm:items-center sm:justify-center sm:text-5xl">
            珠玉の一文を
            <br className="sm:hidden" />
            カード画像に
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
          {isWebAPI ? (
            <ShareSM
              themeColor={themeColor}
              isError={isCheckedLengthQuote && isCheckedLengthCite}
            />
          ) : (
            <SharePC
              themeColor={themeColor}
              isError={isCheckedLengthQuote && isCheckedLengthCite}
            />
          )}
        </div>
      </MainLayout>
    </div>
  );
};

export default Home;
