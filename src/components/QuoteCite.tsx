import React from "react";
import { TextInput } from "@mantine/core";
import { TextRemaining } from "src/components/TextRemaining";

type props = {
  themeColor: string;
  textCite: string;
  textLength: number;
  maxLength: number;
  isLength: boolean;
  textCiteGetInputProps: object;
};

const QuoteCite = ({
  themeColor,
  textCite,
  textLength,
  maxLength,
  isLength,
  textCiteGetInputProps,
}: props) => {
  const errorTextsource = !isLength ? "文字数が上限を超えています！" : null;

  return (
    <div className="mx-auto mt-10 max-w-[400px] font-zen">
      <p className="mb-2 text-2xl font-semibold">引用元</p>
      <TextInput
        error={errorTextsource}
        placeholder="(例) 夏目漱石『吾輩は猫である』より"
        className="mx-auto"
        size="md"
        maxLength={maxLength + 10}
        {...textCiteGetInputProps}
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

export default QuoteCite;
