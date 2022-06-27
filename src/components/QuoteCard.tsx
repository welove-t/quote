import { Blockquote } from "@mantine/core";
import React from "react";

type props = {
  themeColor: string;
  CardBgColor: string;
  CardFoColor: string;
  quote: string;
  source: string;
};

const QuoteCard = ({
  themeColor,
  CardBgColor,
  CardFoColor,
  quote,
  source,
}: props) => {
  return (
    <div
      className={`mx-auto max-w-[360px] px-2 pt-2 pb-1 text-center sm:inline-block sm:w-[360px] ${themeColor}`}
      id="canvas"
    >
      <div
        className={`relative my-1 flex min-h-[308px] items-center justify-center whitespace-pre-wrap rounded-xl border-2 p-4 font-bold shadow-npConvexCard ${CardBgColor} dark:shadow-darkConvexCard`}
      >
        <Blockquote
          classNames={{
            root: "my-auto py-8",
            body: `text-base font-semibold italic tracking-wider ${CardFoColor}`,
            cite: `mt-4 text-sm tracking-wide opacity-80 ${CardFoColor}`,
            icon: "hidden",
          }}
          cite={`- ${source}`}
        >
          {quote}
        </Blockquote>

        <div
          className={`absolute right-6 bottom-4 text-right text-sm font-normal tracking-wider ${CardFoColor} opacity-80`}
        >
          #QuoteCard
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
