import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-40 bg-gray-100 pt-10 pb-20">
      <div className="container text-center">
        <div className="flex justify-center space-x-4">
          <Link href="/terms">
            <a className="text-gray-600">利用規約</a>
          </Link>
          <Link href="/privacypolicy">
            <a className="text-gray-600">プライバシーポリシー</a>
          </Link>
        </div>

        <p className="mt-4 text-center">
          このサービスは
          <a
            href="https://twitter.com/welove_tk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            @welove_tk
          </a>
          が作成しました
        </p>
        <p className="pt-4">&copy; QuoteCard</p>
      </div>
    </div>
  );
};

export default Footer;
