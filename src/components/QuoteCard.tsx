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
      className={`my-20 mx-auto mb-4 flex items-center whitespace-normal rounded-lg border-hidden text-center sm:w-96`}
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
