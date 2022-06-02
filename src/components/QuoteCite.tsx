import React from "react";
import { TextInput } from "@mantine/core";
import { TextRemaining } from "src/components/TextRemaining";

type props = {
  textCite: string;
  textCiteGetInputProps: object;
};

const QuoteCite = ({ textCite, textCiteGetInputProps }: props) => {
  const maxTextCite: number = 50;
  const errorTextsource =
    textCite.length > maxTextCite ? "文字数がオーバーしています" : null;

  return (
    <div className="mx-auto mt-10 max-w-[400px]">
      <label className="text-lg font-semibold">引用元</label>
      <TextInput
        label="上記の参照元(人名・書名・登場人物名等)を書いて下さい"
        error={errorTextsource}
        placeholder="(例) 夏目漱石『吾輩は猫である』より"
        className="mx-auto"
        size="md"
        maxLength={maxTextCite + 1}
        {...textCiteGetInputProps}
      />
      {textCite.length > maxTextCite ? (
        <TextRemaining color="red-500" count={maxTextCite - textCite.length} />
      ) : (
        <TextRemaining color="gray-500" count={maxTextCite - textCite.length} />
      )}
    </div>
  );
};

export default QuoteCite;
