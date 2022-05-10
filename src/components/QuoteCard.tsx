import React, { LegacyRef, useEffect, useState } from "react";

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
      {png && (
        <div className="mx-auto mb-4 sm:h-52">
          {/* <TweetImage png={png} width={width} height={height} ref={container} /> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="icon"
            src={png}
            height={height}
            width={width}
            className="rounded-lg"
            ref={container}
          />
        </div>
      )}
    </div>
  );
};

export default QuoteCard;
