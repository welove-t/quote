import { Blockquote } from "@mantine/core";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

type props = {
  themeColor: string;
  quote: string;
  source: string;
};

const QuoteCard = ({ themeColor, quote, source }: props) => {
  return (
    <div
      className={`mx-auto max-w-[360px] px-2 pt-8 pb-1 text-center sm:inline-block sm:w-[360px] ${themeColor}`}
      id="canvas"
    >
      <div
        className={`relative my-1 flex min-h-[308px] items-center justify-center whitespace-pre-wrap rounded-xl border-2 p-4 font-bold shadow-npConvexCard ${themeColor} dark:shadow-darkConvexCard`}
      >
        <div
          className={`${themeColor} absolute top-[-24px] flex h-12 w-12 items-center justify-center rounded-full border-2 shadow-npConvexCard dark:shadow-darkConvexCard sm:top-[-36px] sm:h-16 sm:w-16`}
        >
          <p className="my-auto text-2xl">Q</p>
        </div>
        <Blockquote
          classNames={{
            root: "my-auto py-8",
            body: "text-base font-semibold italic tracking-wider text-slate-500 dark:text-slate-300",
            cite: "mt-4 text-sm tracking-wide text-slate-500 opacity-80 dark:text-slate-300",
            icon: "hidden",
          }}
          cite={`- ${source}`}
        >
          {quote}
        </Blockquote>

        <div className="absolute right-6 bottom-4 text-right text-sm font-normal tracking-wider text-slate-500 opacity-80 dark:text-slate-300">
          #QuoteCard
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
