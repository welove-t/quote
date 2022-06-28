import React from "react";
import Image from "next/image";

const QrCode = () => {
  return (
    <div className="hidden sm:mt-8 sm:flex sm:flex-col sm:items-center sm:space-y-4">
      <p className="font-zen dark:font-semibold">
        ※当サイトはスマホでのご利用をお勧めしております。
      </p>
      <Image
        src="/images/qrcode-quote-card.png"
        width={200}
        height={200}
        alt=""
      ></Image>
      <p className="text-center font-zen dark:font-semibold">
        ( https://quote-card.com/ )
      </p>
    </div>
  );
};

export default QrCode;
