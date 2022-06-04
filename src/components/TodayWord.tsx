import React, { useState } from "react";
import { Box, Blockquote } from "@mantine/core";
import ReactCardFlip from "react-card-flip";

const TodayWord = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div
      className="mx-auto mt-4 mb-4 h-96 max-w-[360px] cursor-pointer py-4 sm:w-[360px] md:w-[360px]"
      onClick={() => {
        setIsOpened(true);
      }}
    >
      {/* カード裏 */}
      <ReactCardFlip isFlipped={isOpened}>
        <Box
          className="flex h-96 w-full items-center justify-center whitespace-normal rounded-xl bg-gray-800 text-center font-bold shadow-sm shadow-slate-400"
          sx={() => ({ backgroundColor: "#f1f4f7" })}
        >
          <div className="text-xl text-white">QuoteCard</div>
        </Box>
        {/* カード表 */}
        <Box
          className="flex h-96 w-full cursor-auto items-center justify-center whitespace-normal rounded-xl border-hidden text-center font-bold shadow-sm shadow-slate-400"
          sx={() => ({ backgroundColor: "#f1f4f7" })}
        >
          <Blockquote
            cite={`- ニーチェ`}
            styles={{
              root: { marginTop: 4 },
              icon: { color: "#778a99" },
              inner: { color: "#778a99", paddingRight: 24 },
              body: {
                color: "#778a99",
                letterSpacing: 0.8,
                fontSize: 16,
                paddingTop: 2,
              },
              cite: { marginTop: 40, paddingRight: 16 },
            }}
          >
            <div className="italic">{`我思う。故に我あり。`}</div>
          </Blockquote>
          <Box
            className="absolute bottom-5 right-5 border-blue-500 text-right text-sm font-light italic tracking-wider"
            sx={() => ({ color: "#778a99" })}
          >
            #QuoteCard
          </Box>
        </Box>
      </ReactCardFlip>
    </div>
  );
};

export default TodayWord;
