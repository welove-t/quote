import React, { useEffect, useState } from "react";

type props = {
  themeColor: string;
  cardBgColor: string;
  cardFoColor: string;
  quote: string;
  cite: string;
};

const QuoteCard = ({
  themeColor,
  cardBgColor,
  cardFoColor,
  quote,
  cite,
}: props) => {
  // 入力欄内で改行されるとカード内の端が見切れるバグがある
  // その解消のための調整ロジック
  const [rquote, setRquote] = useState(quote);
  const [rcite, setRcite] = useState(quote);
  useEffect(() => {
    setRquote(quote.replace(/\n/g, " \n"));
  }, [quote]);
  useEffect(() => {
    setRcite(cite + " ");
  }, [cite]);
  return (
    <div
      className={`mx-auto max-w-[360px] rounded-xl p-2 text-center sm:inline-block sm:w-[360px] ${themeColor}`}
      id="canvas"
    >
      <div
        className={`relative my-1 flex min-h-[320px] items-center justify-center whitespace-pre-wrap rounded-xl border-2 py-4 px-8 font-bold ${cardBgColor} shadow-npConvexCard dark:shadow-darkConvexCard`}
      >
        <div className="my-auto pt-12 align-middle text-base font-semibold italic tracking-wider text-slate-500 dark:text-slate-300">
          {rquote}
          <p className="font-base mt-16 mb-8 text-sm tracking-wide text-slate-500 opacity-80 dark:text-slate-300">
            {`- ${rcite}`}
          </p>
        </div>
        <br />
        <div className="absolute right-6 bottom-4 text-right text-sm font-normal tracking-wider text-slate-500 opacity-80 dark:text-slate-300">
          #QuoteCard
        </div>

        <div
          className={`absolute right-6 bottom-4 text-right text-sm font-normal tracking-wider ${cardFoColor} opacity-90`}
        >
          #QuoteCard
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
