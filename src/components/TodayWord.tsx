import React from "react";
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
    <div
      className={`mt-10 h-96 max-w-[360px] p-2 text-center sm:inline-block sm:w-[360px] ${themeColor}`}
      id="canvas"
    >
      <div
        className={`relative my-1 flex h-96 min-h-[320px] items-center justify-center whitespace-pre-wrap rounded-xl border-2 py-4 px-6 font-bold shadow-npConvexCard ${themeColor} dark:shadow-darkConvexCard`}
      >
        <div
          className={`${themeColor} absolute top-[-24px] flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-npConvexCard dark:shadow-darkConvexCard sm:top-[-36px] sm:h-16 sm:w-16`}
        >
          <p className="text-2xl">Q</p>
        </div>
        <div className="mt-2 text-sm font-semibold italic tracking-wider text-slate-500 dark:text-slate-300 sm:text-base">
          <section id="todayword" className="italic">
            <TextAnimation section="todayword">
              {todayWords[todayWordsId].quote || "我思う。故に我あり。"}
              <br />
              <br />
              {`- ${todayWords[todayWordsId].cite} ` || "デカルト"}
            </TextAnimation>
          </section>
        </div>
        <br />

        <div className="absolute right-6 bottom-4 text-right text-sm font-normal tracking-wider text-slate-500 opacity-80 dark:text-slate-300">
          #QuoteCard
        </div>
      </div>
    </div>
  );
};

export default TodayWord;
