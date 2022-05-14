import React, { LegacyRef, useEffect, useState } from "react";
import { Blockquote } from "@mantine/core";

type props = {
  quote: string;
  bgColor: string;
  foColor: string;
};

const QuoteCard = ({ quote, bgColor, foColor }: props) => {
  return (
    <div
      className={`my-20 mx-auto mb-4 flex items-center whitespace-normal rounded-lg border-hidden text-center sm:h-52 ${bgColor}`}
    >
      <Blockquote
        id="canvas"
        cite="– Forrest Gump"
        styles={{
          icon: { color: foColor },
          inner: { color: foColor },
          body: { color: foColor },
        }}
      >
        {/* <pre>{quote}</pre> */}
        {quote}
      </Blockquote>
    </div>
  );
};

export default QuoteCard;
