import React from "react";
import { Box, Blockquote } from "@mantine/core";

type props = {
  quote: string;
  source: string;
  bgColor: string;
  foColor: string;
};

const QuoteCard = ({ quote, source, bgColor, foColor }: props) => {
  return (
    <Box
      id="canvas"
      className="mx-auto mt-8 mb-4 max-w-[360px] items-center whitespace-pre-wrap rounded-xl border-hidden py-4 text-center font-bold shadow-np sm:w-[360px] md:w-[360px]"
      sx={() => ({ backgroundColor: "#daecec" })}
    >
      <Blockquote
        cite={`- ${source}`}
        styles={{
          root: { marginTop: 8 },
          icon: { color: foColor, marginRight: 16 },
          inner: { color: foColor, paddingRight: 24 },
          body: {
            color: foColor,
            letterSpacing: 0.8,
            fontSize: 15,
            paddingTop: 2,
            minWidth: 258,
          },
          cite: {
            marginTop: 40,
            paddingRight: 16,
            color: foColor,
            opacity: 0.85,
          },
        }}
      >
        <div className="italic"> {quote}</div>
      </Blockquote>
      <Box
        className="mr-6 border-blue-500 pt-6 text-right text-sm font-light italic tracking-wider"
        sx={() => ({ color: foColor })}
      >
        #QuoteCard
      </Box>
    </Box>
  );
};

export default QuoteCard;
