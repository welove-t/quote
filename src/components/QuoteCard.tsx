import React from "react";
import { Blockquote } from "@mantine/core";

type props = {
  quote: string;
  source: string;
  bgColor: string;
  foColor: string;
};

const QuoteCard = ({ quote, source, bgColor, foColor }: props) => {
  return (
    <div
      id="canvas"
      className={`my-20 mx-auto mb-4 flex items-center whitespace-normal rounded-lg border-hidden text-center sm:w-96 ${bgColor}`}
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
    </div>
  );
};

export default QuoteCard;
