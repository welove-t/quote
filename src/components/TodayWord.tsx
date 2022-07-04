import React, { useEffect, useState } from "react";
import { words } from "src/components/data/TodayWords";
import { format } from "date-fns";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";
import { TextAnimation } from "src/components/TextAnimation";

type props = {
  themeColor: string;
};

// 日付差分
const days: string = formatDistanceToNowStrict(new Date(2021, 12, 1), {
  unit: "day",
  roundingMethod: "ceil",
});
const distanceDay: number = Number(days.substring(0, days.indexOf(" ")));

// 日付差分から今日のワードのidを生成
const todayWordsId: number = distanceDay <= 10 ? distanceDay : distanceDay % 10;

const TodayWord = ({ themeColor }: props) => {
  const [todayWords, setTodayWords] = useState<{
    id: number;
    quote: string;
    cite: string;
  }>({ id: 0, quote: "", cite: "" });

  useEffect(() => {
    setTodayWords(words[todayWordsId]);
  }, [todayWords]);

  return (
    <div
      className={`mx-auto mt-10 max-w-[360px] p-2 text-center sm:inline-block sm:w-[360px] ${themeColor}`}
    >
      <div
        className={`relative my-1 flex h-96 min-h-[320px] items-center justify-center whitespace-pre-wrap rounded-xl border-2 py-4 px-6 font-bold shadow-npConvexCard ${themeColor} dark:shadow-darkConvexCard`}
      >
        <div className="mt-2 text-sm font-semibold italic tracking-wider text-slate-600 dark:text-slate-300 sm:text-base">
          {todayWords.quote && todayWords.cite ? (
            <section id="todayword" className="italic">
              <TextAnimation section="todayword">
                {todayWords.quote}
                <br />
                <br />
                {`- ${todayWords.cite} `}
              </TextAnimation>
            </section>
          ) : (
            <div></div>
          )}
        </div>
        <br />

        <div className="absolute right-6 bottom-4 text-right text-sm font-normal tracking-wider text-slate-600 opacity-90 dark:text-slate-300">
          #QuoteCard
        </div>
      </div>
    </div>
  );
};

export default TodayWord;
