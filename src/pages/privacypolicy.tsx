import React from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import TermsPrivacypolicy from "../components/layouts/TermsPrivacypolicy";

const Privacypolicy = () => {
  const terms = [
    {
      title: "第1条（個人情報を収集・利用する目的）",
      contents: [
        {
          text: "本サービスが個人情報を収集・利用する目的は、以下のとおりです。",

          children: [
            "本サービスサービスの提供・運営のため",
            "ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）",
            "利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため",
            "上記の利用目的に付随する目的",
          ],
        },
      ],
    },
    {
      title: "第2条（利用目的の変更）",
      contents: [
        {
          text: "本サービスは、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。",
        },
        {
          text: "利用目的の変更を行った場合には、変更後の目的について、本サービス所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。",
        },
      ],
    },

    {
      title: "第3条（広告の配信）",
      contents: [
        {
          text: "本サービスは、第三者配信の広告サービスを利用することがあります。",
        },
        {
          text: "広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。",
        },
      ],
    },
    {
      title: "第4条（アクセス解析ツールの利用）",
      contents: [
        {
          text: "Google Analyticsではトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくはGoogle Analytics利用規約をご覧ください。",
        },
      ],
    },
    {
      title: "第5条（プライバシーポリシーの変更）",
      contents: [
        {
          text: "本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。",
        },
        {
          text: "本サービスが別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。",
        },
      ],
    },
    {
      title: "第6条（お問い合わせ窓口）",
      contents: [
        {
          text: "本ポリシーに関するお問い合わせは、下記(@welove_tk)よりダイレクトメールにてお願いいたします。",
        },
      ],
    },
  ];

  return (
    <div>
      <Header themeColor="#F3F3F3" />
      <div className="container pt-20">
        <h1 className="pt-8 text-xl font-bold">プライバシーポリシー</h1>
        <p className="py-8 text-sm">
          本サービスは、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
        </p>
        {terms.map((term) => (
          <div key={term.title}>
            <TermsPrivacypolicy title={term.title} contents={term.contents} />
          </div>
        ))}
        <p className="pt-4">以上</p>
      </div>
      <Footer />
    </div>
  );
};

export default Privacypolicy;
