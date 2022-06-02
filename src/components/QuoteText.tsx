import React from "react";
import { Textarea } from "@mantine/core";
import { TextRemaining } from "src/components/TextRemaining";

type props = {
  textQuote: string;
  textQuoteGetInputProps: object;
};

const QuoteText = ({ textQuote, textQuoteGetInputProps }: props) => {
  const maxTextQuote: number = 120;
  const errorTextquote =
    textQuote.length > maxTextQuote ? "文字数がオーバーしています" : null;

  return (
    <div className="mx-auto mt-10 max-w-[400px]">
      <label className="text-lg font-semibold">引用文</label>
      <Textarea
        label="お気に入りのフレーズを書いて下さい"
        error={errorTextquote}
        placeholder="(例) 吾輩は猫である。名前はまだ無い。"
        className="mx-auto"
        autosize
        size="md"
        minRows={2}
        maxRows={6}
        maxLength={maxTextQuote + 1}
        {...textQuoteGetInputProps}
      />
      {textQuote.length > maxTextQuote ? (
        <TextRemaining
          color="red-500"
          count={maxTextQuote - textQuote.length}
        />
      ) : (
        <TextRemaining
          color="gray-500"
          count={maxTextQuote - textQuote.length}
        />
      )}
    </div>
  );
};

export default QuoteText;
