import React, { LegacyRef, useEffect, useState } from "react";
import { Blockquote } from "@mantine/core";

type props = {
  quote: string;
  container: null | LegacyRef<HTMLImageElement>;
  png: string | null;
  width: number;
  height: number;
};

const QuoteCard = ({ quote, container, png, width, height }: props) => {
  return (
    <div className="text-center">
      <div className="my-20 mx-auto mb-4 flex items-center border-solid sm:h-52">
        <Blockquote cite="– Forrest Gump" id="canvas">
          <pre>{quote}</pre>
        </Blockquote>
      </div>
    </div>
  );
};

export default QuoteCard;
