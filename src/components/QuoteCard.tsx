import { Blockquote } from "@mantine/core";
import React from "react";

type props = {
  themeColor: string;
  cardBgColor: string;
  cardFoColor: string;

  quote: string;
  source: string;
};

const QuoteCard = ({
  themeColor,
  cardBgColor,
  cardFoColor,

  quote,
  source,
}: props) => {
  return (
    <div
      className={`mx-auto max-w-[360px] rounded-xl p-2 text-center sm:inline-block sm:w-[360px] ${themeColor}`}
      id="canvas"
    >
      <div
        className={`relative my-1 flex min-h-[320px] items-center justify-center whitespace-pre-wrap rounded-xl border-2 p-4 font-bold ${cardBgColor} shadow-npConvexCard dark:shadow-darkConvexCard`}
      >
        <Blockquote
          classNames={{
            root: "my-auto py-8",
            body: `text-base font-semibold italic tracking-wider ${cardFoColor}`,
            cite: `mt-6 text-sm tracking-wide opacity-80 ${cardFoColor}`,
            icon: "hidden",
          }}
          cite={`- ${source}`}
        >
          {quote}
        </Blockquote>

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
