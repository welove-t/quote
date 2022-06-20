import React from "react";
import { Blockquote } from "@mantine/core";
import { todayWords } from "src/components/data/TodayWords";
import { format } from "date-fns";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import TextAnimation from "src/components/TextAnimation";

type props = {
  themeColor: string;
};

// 確認用(後で消す)
const date = format(new Date(), "yyyy/MM/dd");
const standartDay = format(new Date(2021, 12, 1), "yyyy/MM/dd");

// 日付差分
const days: string = formatDistanceToNowStrict(new Date(2021, 12, 1), {
  unit: "day",
  roundingMethod: "ceil",
});
const distanceDay: number = Number(days.substring(0, days.indexOf(" ")));

// 日付差分から今日のワードのidを生成
const todayWordsId: number = distanceDay <= 10 ? distanceDay : distanceDay % 10;

const TodayWord = ({ themeColor }: props) => {
  console.log(standartDay, date, days);
  console.log(distanceDay, todayWordsId);

  return (
    <div className="relative mx-auto mt-4 mb-4 h-96 max-w-[360px] cursor-pointer whitespace-pre-wrap py-4 sm:w-[360px] md:w-[360px]">
      <div className="flex h-96 w-full cursor-auto items-center justify-center rounded-xl border-hidden text-center font-bold shadow-npConvexCard">
        <Blockquote
          styles={{
            root: { marginTop: 4 },
            icon: { color: "#778a99", marginRight: 16 },
            inner: {
              color: "#778a99",
              paddingRight: 24,
            },
            body: {
              color: "#778a99",
              letterSpacing: 0.8,
              fontSize: 15,
              minWidth: 258,
            },
          }}
        >
          <section id="todayword" className="italic">
            <TextAnimation section="todayword">
              {todayWords[todayWordsId].quote || "我思う。故に我あり。"}
              <br />
              <br />
              {`- ${todayWords[todayWordsId].cite} ` || "デカルト"}
            </TextAnimation>
          </section>
        </Blockquote>
        <div
          className="absolute bottom-1 right-5 text-right text-sm font-normal italic tracking-wider"
          style={{ color: "#778a99" }}
        >
          #QuoteCard
        </div>
      </div>
    </div>
  );
};

export default TodayWord;
