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
      className="mx-auto mt-8 mb-4 items-center whitespace-normal rounded-lg border-hidden py-4 text-center font-bold sm:w-[360px] md:w-[360px]"
      sx={() => ({ backgroundColor: bgColor })}
    >
      <Blockquote
        cite={`- ${source}`}
        styles={{
          root: { marginTop: 8 },
          icon: { color: foColor },
          inner: { color: foColor, paddingRight: 24 },
          body: {
            color: foColor,
            letterSpacing: 0.8,
            fontSize: 16,
            paddingTop: 2,
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
