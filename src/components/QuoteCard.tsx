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
      className={`my-20 mx-auto mb-4 flex items-center border-solid text-center sm:h-52 ${bgColor}`}
    >
      <Blockquote
        cite="– Forrest Gump"
        id="canvas"
        styles={{
          icon: { color: foColor },
          inner: { color: foColor },
          body: { color: foColor },
        }}
      >
        <pre>{quote}</pre>
      </Blockquote>
    </div>
  );
};

export default QuoteCard;
