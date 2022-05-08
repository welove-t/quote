import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <div className="bg-blue-800">
        <header className="container flex h-16 items-center">
          <span className=" text-lg text-white">Quote Card</span>
        </header>
      </div>
      <div className="container text-center">
        <span>メインコンポーネント</span>
        <br />
        <span>あなたの琴線に触れた引用カードを作ろう！</span>
        <br />
        <span>（引用イメージをカルーセルで表示させる）</span>
        <br />
        <button className="rounded-full border bg-blue-500 px-4 py-2 text-white">
          さっそく始める
        </button>
      </div>
      <div className="bg-gray-100 pt-10 pb-24">
        <div className="container">
          <div className="flex justify-center space-x-4">
            <Link href="/">
              <a className="text-gray-600">利用規約</a>
            </Link>
            <Link href="/">
              <a className="text-gray-600">プライバシーポリシー</a>
            </Link>
          </div>
          <div className="pt-4 text-center">
            <Link href="/">
              <a className="text-gray-600">当サービスの開発者</a>
            </Link>
            <p className="pt-4">&copy; QuoteCard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
