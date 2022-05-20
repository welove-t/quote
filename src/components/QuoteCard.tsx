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
      className="my-20 mx-auto mb-4 flex w-96 items-center whitespace-normal rounded-lg border-hidden pt-12 pb-4 text-center font-bold"
      sx={() => ({ backgroundColor: bgColor })}
    >
      <Blockquote
        cite={`- ${source}`}
        styles={{
          icon: { color: foColor },
          inner: { color: foColor },
          body: { color: foColor, letterSpacing: 0.8, width: 304 },
          cite: { marginTop: 40, paddingRight: 40 },
        }}
      >
        {quote}
      </Blockquote>
    </Box>
  );
};

export default QuoteCard;
