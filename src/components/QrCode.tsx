import React from "react";
import Image from "next/image";

const QrCode = () => {
  return (
    <div className="hidden font-extralight text-gray-500 dark:text-gray-100 sm:mt-8 sm:flex sm:flex-col sm:items-center sm:space-y-4">
      <p>※当サイトはスマホでのご利用をお勧めしております。</p>
      <Image
        src="/images/qrcode-quote-card.png"
        width={200}
        height={200}
        alt=""
      ></Image>
      <p className="font-normal">https://quote-card.com/</p>
    </div>
  );
};

export default QrCode;
