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
      className={`max-w-[360px] rounded-xl p-2 text-center sm:inline-block sm:w-[360px] ${themeColor}`}
      id="canvas"
    >
      <div
        className={`relative my-1 flex min-h-[320px] flex-col items-center justify-center whitespace-pre-wrap rounded-xl border-2 p-4 font-bold shadow-npConvexCard ${themeColor} dark:shadow-darkConvexCard`}
      >
        <FaQuoteLeft className="absolute top-5 text-xl text-green-600"></FaQuoteLeft>
        <div className="mt-12 text-base font-semibold italic tracking-wider text-slate-500 dark:text-slate-300">
          {quote}

          <p className="font-base mt-12 text-sm tracking-wide text-slate-500 opacity-80 dark:text-slate-300">
            {`- ${source}`}
          </p>
        </div>
        <br />

        <div className="absolute right-6 bottom-4 text-right text-sm font-normal tracking-wider text-slate-500 opacity-80 dark:text-slate-300">
          #QuoteCard
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
