import React from "react";
import { Textarea } from "@mantine/core";
import { TextRemaining } from "src/components/TextRemaining";
import { Labels } from "src/components/Labels";

type props = {
  themeColor: string;
  textQuote: string;
  textLength: number;
  maxLength: number;
  isLength: boolean;
  textQuoteGetInputProps: object;
};

const QuoteText = ({
  themeColor,
  textQuote,
  textLength,
  maxLength,
  isLength,
  textQuoteGetInputProps,
}: props) => {
  const errorTextquote = !isLength ? "文字数が上限を超えています！" : null;

  return (
    <div className="mx-auto mt-10 max-w-[400px]">
      <Labels>引用文</Labels>
      <Textarea
        error={errorTextquote}
        placeholder="(例) 吾輩は猫である。名前はまだ無い。"
        className="mx-auto"
        autosize
        size="md"
        minRows={2}
        maxRows={6}
        maxLength={maxLength + 30}
        {...textQuoteGetInputProps}
        classNames={{
          input: `text-gray-700 font-medium border-none ${themeColor} shadow-npConcaveText dark:text-gray-200 dark:shadow-darkConcaveText`,
          label: "font-zen font-bold",
        }}
      />
      {!isLength ? (
        <TextRemaining color="red-500" count={maxLength - textLength} />
      ) : (
        <TextRemaining color="gray-500" count={maxLength - textLength} />
      )}
    </div>
  );
};

export default QuoteText;
