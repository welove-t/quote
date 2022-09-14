import type { NextPage } from "next";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import TodayWord from "src/components/TodayWord";
import SharePC from "src/components/SharePC";
import ShareSM from "src/components/ShareSM";
import QuoteText from "src/components/QuoteText";
import QuoteCite from "src/components/QuoteCite";
import QrCode from "src/components/QrCode";
import { ThemeColor } from "src/components/utils/ThemeColor";
import { MainLayout } from "src/components/layouts/MainLayout";
import CreateImage from "src/components/CreateImage";
import Head from "next/head";
import { NextSeo } from "next-seo";

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
    if (!navigator.canShare) {
      setIsWebAPI(false);
    } else {
      setIsWebAPI(true);
    }
  }, []);

  return (
    <div className={themeColor}>
      <Head>
        <title>QuoteCard - お気に入りの引用文を画像化してシェアしよう！</title>
      </Head>
      <NextSeo
        title="QuoteCard"
        description="お気に入りの引用文を画像化してシェアしよう！"
        canonical="https://quote-card.com/"
        openGraph={{
          url: "https://quote-card.com/",
          title: "QuoteCard",
          description: "お気に入りの引用文を画像化してシェアしよう！",
          images: [
            {
              url: "https://quote-card.com/images/logo-quotecard-light.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://quote-card.com/images/logo-quotecard-light.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://quote-card.com/images/logo-quotecard-light.png" },
            { url: "https://quote-card.com/images/logo-quotecard-light.png" },
          ],
          site_name: "QuoteCard",
        }}
        twitter={{
          handle: "@welove-tk",
          site: "@welove-tk",
          cardType: "summary_large_image",
        }}
      />
      <MainLayout themeColor={themeColor}>
        <div className="container pt-6 text-center md:pt-16">
          <br />
          <p className="mb-8 text-4xl font-extralight leading-relaxed tracking-widest text-gray-600 dark:text-gray-100 sm:flex sm:items-center sm:justify-center sm:text-5xl">
            珠玉の一文を
            <br className="sm:hidden" />
            カード画像に
          </p>
          <TodayWord themeColor={themeColor} />
          <br />
          <p className="text-sm text-gray-600 dark:text-gray-100">
            引用文・引用元を書いて上記のようなカード画像を作成＆SNS上でシェアできます！
          </p>
          <QrCode />

          <QuoteText
            themeColor={themeColor}
            textLength={textQuoteLength}
            maxLength={maxTextQuote}
            isLength={isCheckedLengthQuote}
            textQuoteGetInputProps={form.getInputProps("textQuote")}
          />
          <QuoteCite
            themeColor={themeColor}
            textLength={textCiteLength}
            maxLength={maxTextCite}
            isLength={isCheckedLengthCite}
            textCiteGetInputProps={form.getInputProps("textCite")}
          />
          <CreateImage
            themeColor={themeColor}
            quote={textQuote}
            source={textCite}
          ></CreateImage>

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
