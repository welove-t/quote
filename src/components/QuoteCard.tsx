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
      className="mx-auto mt-8 mb-4 items-center whitespace-normal rounded-lg border-hidden pb-4 text-center font-bold sm:w-[360px] md:w-[360px]"
      sx={() => ({ backgroundColor: bgColor })}
    >
      <Box
        className="ml-6 border-blue-500 pt-6 text-left text-xl tracking-wider"
        sx={() => ({ color: foColor })}
      >
        QuoteCard
      </Box>
      <div className="border"></div>
      <Blockquote
        cite={`- ${source}`}
        styles={{
          root: { marginTop: 8 },
          icon: { color: foColor },
          inner: { color: foColor, paddingRight: 24 },
          body: { color: foColor, letterSpacing: 0.8, fontSize: 16 },
          cite: { marginTop: 40, paddingRight: 16 },
        }}
      >
        {quote}
      </Blockquote>
    </Box>
  );
};

export default QuoteCard;
