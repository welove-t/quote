import React, { useEffect, useState } from "react";
import QuoteCard from "src/components/QuoteCard";
import { SwatchColor } from "src/components/utils/SwatchColor";

type props = {
  themeColor: string;
  quote: string;
  source: string;
};

const CreateImage = ({ themeColor, quote, source }: props) => {
  // ColorSwatch用
  const colorSwatchItem = SwatchColor();
  const [checked, setChecked] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  const classNamesColorSwatch = (...classes: [string, string]) => {
    return classes.filter(Boolean).join(" ");
  };

  // カードの色を設定
  const [cardBgColor, setCardBgColor] = useState<string>(
    colorSwatchItem[0].bgColor
  );
  const [cardFoColor, setCardFoColor] = useState<string>(
    colorSwatchItem[0].foColor
  );

  // ダーク・ライトモード切り替え時にカードの色を初期化
  useEffect(() => {
    setCardBgColor(colorSwatchItem[0].bgColor);
    setCardFoColor(colorSwatchItem[0].foColor);
    setChecked([true, false, false, false]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeColor]);

  return (
    <div className="mt-10 text-center">
      <label className="mb-2 font-zen text-2xl font-semibold">
        カラーパターン
      </label>

      <div className="my-4 flex items-center justify-center space-x-6">
        {colorSwatchItem.map((item, index) => (
          <button
            key={index}
            className={classNamesColorSwatch(
              checked[index]
                ? `shadow-npConcaveButton dark:shadow-darkConcaveButton`
                : `shadow-npConvexButton dark:shadow-darkConvexButton`,
              ` h-10 w-10 rounded-full border-none ${themeColor} cursor-pointer`
            )}
            onClick={() => {
              setChecked((checked) =>
                !checked[index]
                  ? checked.map((c, i) => index === i && !c)
                  : checked
              );

              setCardBgColor(item.bgColor);
              setCardFoColor(item.foColor);
            }}
          >
            <div
              className={`h-7 w-7 rounded-full ${item.bgColor} ${item.foColor} border-none`}
            ></div>
          </button>
        ))}
      </div>

      <QuoteCard
        themeColor={themeColor}
        cardBgColor={cardBgColor}
        cardFoColor={cardFoColor}
        quote={quote}
        source={source}
      />
    </div>
  );
};

export default CreateImage;
