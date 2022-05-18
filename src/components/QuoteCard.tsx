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
      className="my-20 mx-auto mb-4 flex w-96 items-center whitespace-normal rounded-lg border-hidden py-12 text-center"
      sx={() => ({ backgroundColor: bgColor })}
    >
      <Blockquote
        cite={`- ${source}`}
        styles={{
          icon: { color: foColor },
          inner: { color: foColor },
          body: { color: foColor },
        }}
      >
        {quote}
      </Blockquote>
    </Box>
  );
};

export default QuoteCard;
