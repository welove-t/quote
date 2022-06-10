import React from "react";
import { Box, Blockquote } from "@mantine/core";

type props = {
  quote: string;
  source: string;
};

const QuoteCard = ({ quote, source }: props) => {
  return (
    <div
      className="inline-block max-w-[360px] rounded-xl bg-[#daecec] p-2 text-center sm:w-[360px] md:w-[360px]"
      id="canvas"
    >
      <div className="my-4 items-center whitespace-pre-wrap rounded-xl border-2 bg-[#daecec] py-4 font-bold shadow-npConvexCard">
        <Blockquote
          cite={`- ${source}`}
          styles={{
            root: { marginTop: 8 },
            icon: { color: "#778a99", marginRight: 16 },
            inner: { color: "#778a99", paddingRight: 24 },
            body: {
              color: "#778a99",
              letterSpacing: 0.8,
              fontSize: 15,
              paddingTop: 2,
              minWidth: 258,
            },
            cite: {
              marginTop: 40,
              paddingRight: 16,
              color: "#778a99",
              opacity: 0.85,
            },
          }}
        >
          <div className="italic"> {quote}</div>
        </Blockquote>
        <Box
          className="mr-6 border-blue-500 pt-6 text-right text-sm font-light italic tracking-wider"
          sx={() => ({ color: "#778a99" })}
        >
          #QuoteCard
        </Box>
      </div>
    </div>
  );
};

export default QuoteCard;
