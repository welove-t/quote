import React from "react";
import { TextInput } from "@mantine/core";
import { TextRemaining } from "src/components/TextRemaining";

type props = {
  textCite: string;
  textLength: number;
  maxLength: number;
  isLength: boolean;
  textCiteGetInputProps: object;
};

const QuoteCite = ({
  textCite,
  textLength,
  maxLength,
  isLength,
  textCiteGetInputProps,
}: props) => {
  const errorTextsource = !isLength ? "文字数がオーバーしています" : null;

  return (
    <div className="mx-auto mt-10 max-w-[400px]">
      <label className="text-lg font-semibold">引用元</label>
      <TextInput
        label="上記の参照元(人名・書名・登場人物名等)を書いて下さい"
        error={errorTextsource}
        placeholder="(例) 夏目漱石『吾輩は猫である』より"
        className="mx-auto"
        size="md"
        maxLength={maxLength + 10}
        {...textCiteGetInputProps}
        classNames={{
          input:
            "shadow-npConcaveText bg-[#daecec] focus:border-[#daecec] font-semibold text-gray-600",
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
