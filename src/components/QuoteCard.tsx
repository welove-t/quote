import React from "react";
import { Box, Blockquote } from "@mantine/core";

type props = {
  themeColor: string;
  quote: string;
  source: string;
};

const QuoteCard = ({ themeColor, quote, source }: props) => {
  return (
    <div
      className="max-w-[360px] rounded-xl p-2 text-center sm:inline-block sm:w-[360px]"
      style={{ backgroundColor: themeColor }}
      id="canvas"
    >
      <div
        className="my-1 items-center whitespace-pre-wrap rounded-xl border-2 py-4 font-bold shadow-npConvexCard"
        style={{ backgroundColor: themeColor }}
      >
        <Blockquote
          cite={`- ${source}`}
          styles={{
            root: { marginTop: 8, paddingRight: 16 },
            icon: { color: "#778a99", marginRight: 16 },
            inner: { color: "#778a99" },
            body: {
              color: "#778a99",
              letterSpacing: 0.8,
              fontSize: 16,
              paddingTop: 2,
              minWidth: 258,
            },
            cite: {
              marginTop: 40,
              paddingRight: 24,
              color: "#778a99",
              opacity: 0.85,
            },
          }}
        >
          <div className="pr-3 italic"> {quote}</div>
        </Blockquote>
        <Box
          className="mr-6 pt-6 text-right text-sm font-light italic tracking-wider"
          sx={() => ({ color: "#778a99" })}
        >
          #QuoteCard
        </Box>
      </div>
    </div>
  );
};

export default QuoteCard;
