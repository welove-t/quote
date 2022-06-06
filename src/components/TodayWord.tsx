import React, { useState } from "react";
import { Box, Blockquote } from "@mantine/core";
import ReactCardFlip from "react-card-flip";
import { todayWords } from "src/components/data/TodayWords";
import { format } from "date-fns";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

// 確認用(後で消す)
const date = format(new Date(), "yyyy/MM/dd");
const standartDay = format(new Date(2021, 12, 1), "yyyy/MM/dd");

// 日付差分
const days: string = formatDistanceToNowStrict(new Date(2021, 12, 1), {
  unit: "day",
});
const distanceDay: number = Number(days.substring(0, days.indexOf(" ")));

// 日付差分から今日のワードのidを生成
const todayWordsId: number = distanceDay <= 10 ? distanceDay : distanceDay % 10;

const TodayWord = () => {
  const [isOpened, setIsOpened] = useState(false);
  console.log(standartDay, date, days);
  console.log(distanceDay, todayWordsId);
  return (
    <div
      className="mx-auto mt-4 mb-4 h-96 max-w-[360px] cursor-pointer py-4 sm:w-[360px] md:w-[360px]"
      onClick={() => {
        setIsOpened(true);
      }}
    >
      {/* カード裏 */}
      <ReactCardFlip isFlipped={isOpened}>
        <Box
          className="flex h-96 w-full items-center justify-center whitespace-normal rounded-xl bg-gray-800 text-center font-bold shadow-sm shadow-slate-400"
          sx={() => ({ backgroundColor: "#f1f4f7" })}
        >
          <div className="text-xl text-white">QuoteCard</div>
        </Box>
        {/* カード表 */}
        <Box
          className="flex h-96 w-full cursor-auto items-center justify-center whitespace-pre-wrap rounded-xl border-hidden text-center font-bold shadow-sm shadow-slate-400"
          sx={() => ({ backgroundColor: "#f1f4f7" })}
        >
          <Blockquote
            cite={todayWords[todayWordsId].cite || "ニーチェ"}
            styles={{
              root: { marginTop: 4 },
              icon: { color: "#778a99" },
              inner: { color: "#778a99", paddingRight: 24 },
              body: {
                color: "#778a99",
                letterSpacing: 0.8,
                fontSize: 16,
                paddingTop: 2,
              },
              cite: { marginTop: 40, paddingRight: 16 },
            }}
          >
            <div className="italic">
              {todayWords[todayWordsId].quote || "我思う。故に我あり。"}
            </div>
          </Blockquote>
          <Box
            className="absolute bottom-5 right-5 border-blue-500 text-right text-sm font-light italic tracking-wider"
            sx={() => ({ color: "#778a99" })}
          >
            #QuoteCard
          </Box>
        </Box>
      </ReactCardFlip>
    </div>
  );
};

export default TodayWord;
