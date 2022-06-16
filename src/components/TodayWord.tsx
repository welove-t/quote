import React, { useState } from "react";
import { Box, Blockquote } from "@mantine/core";
import ReactCardFlip from "react-card-flip";
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
      <Box
        className="flex h-96 w-full cursor-auto items-center justify-center whitespace-pre-wrap rounded-xl border-hidden text-center font-bold shadow-npConvexCard"
        sx={() => ({ backgroundColor: themeColor })}
      >
        <Blockquote
          styles={{
            root: { marginTop: 4 },
            icon: { color: "#778a99", marginRight: 16 },
            inner: { color: "#778a99", paddingRight: 24 },
            body: {
              color: "#778a99",
              letterSpacing: 0.8,
              fontSize: 15,
              minWidth: 258,
            },
            // cite: { marginTop: 8, paddingRight: 16 },
          }}
        >
          <section id="souseki" className="italic">
            <TextAnimation section="souseki">
              吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。
              <br />
              <br />
              <br />- 夏目漱石 『吾輩は猫である』より
            </TextAnimation>
          </section>
          {/* <section id="todayword">
            <TextAnimation section="todayword">
              {todayWords[todayWordsId].quote || "我思う。故に我あり。"}
            </TextAnimation>
          </section> */}
        </Blockquote>
        <Box
          className="absolute bottom-5 right-5 border-blue-500 text-right text-sm font-light italic tracking-wider"
          sx={() => ({ color: "#778a99" })}
        >
          #QuoteCard
        </Box>
      </Box>
    </div>
  );
};

export default TodayWord;
