import React from "react";
import { Box, Blockquote } from "@mantine/core";

const TodayWord = () => {
  return (
    <div className="group relative mx-auto mt-4 mb-4 h-96 max-w-[360px] cursor-pointer py-4 transition-all delay-700 sm:w-[360px] md:w-[360px]">
      {/* カード裏 */}
      <Box
        className="absolute left-0 top-0 flex h-96 w-full items-center justify-center whitespace-normal rounded-lg bg-gray-800 text-center font-bold transition-all duration-500 backface-hidden group-hover:rotate-y-180"
        sx={() => ({ backgroundColor: "#f1f4f7" })}
      >
        <div className="text-xl text-white">QuoteCard</div>
      </Box>
      {/* カード表 */}
      <Box
        className="absolute left-0 top-0 flex h-96 w-full items-center justify-center whitespace-normal rounded-lg border-hidden text-center font-bold transition-all duration-500 rotate-y--180 backface-hidden group-hover:rotate-y-0"
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
    </div>
  );
};

export default TodayWord;
