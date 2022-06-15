import React from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import TermsPrivacypolicy from "src/components/layouts/TermsPrivacypolicy";

export default function Terms() {
  const terms = [
    {
      title: "第1条（適用）",
      contents: [
        {
          text: "本規約は、ユーザーと運営者との間の本サービスの利用に関わる一切の関係に適用されるものとします。",
        },
        {
          text: "運営者は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。",
        },
        {
          text: "本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。",
        },
      ],
    },

    {
      title: "第2条（禁止事項）",
      contents: [
        {
          text: "ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。",
          children: [
            "法令または公序良俗に違反する行為",
            "犯罪行為に関連する行為",
            "運営者、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為",
            "運営者のサービスの運営を妨害するおそれのある行為",
            "意図的にサーバーに過剰な負荷をかける行為",
            "運営者のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為",
            "運営者、本サービスの他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為",
            "その他、運営者が不適切と判断する行為",
          ],
        },
      ],
    },
    {
      title: "第3条（本サービスの提供の停止等）",
      contents: [
        {
          text: "運営者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。",

          children: [
            "本サービスにかかるコンピュータシステムの保守点検または更新を行う場合",
            "地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合",
            "コンピュータまたは通信回線等が事故により停止した場合",
            "その他、運営者が本サービスの提供が困難と判断した場合",
          ],
        },
        {
          text: "運営者は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。",
        },
      ],
    },
    {
      title: "第4条（著作権）",
      contents: [
        {
          text: "(！要確認！)本サービスおよび本サービスに関連する一切の情報についての著作権およびその他の知的財産権はすべて運営者または運営者にその利用を許諾した権利者に帰属し、ユーザーは無断で複製、譲渡、貸与、翻訳、改変、転載、公衆送信（送信可能化を含みます。）、伝送、配布、出版、営業使用等をしてはならないものとします。",
        },
      ],
    },

    {
      title: "第5条（保証の否認および免責事項）",
      contents: [
        {
          text: "運営者は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。",
        },
        {
          text: "運営者は、本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。",
        },
        {
          text: "運営者は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。",
        },
      ],
    },
    {
      title: "第6条（サービス内容の変更等）",
      contents: [
        {
          text: "運営者は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。",
        },
      ],
    },
    {
      title: "第7条（利用規約の変更）",
      contents: [
        {
          text: "運営者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。",
        },
      ],
    },
    {
      title: "第8条（個人情報の取扱い）",
      contents: [
        {
          text: "運営者は、本サービスの利用によって取得する個人情報については、運営者「プライバシーポリシー」に従い適切に取り扱うものとします。",
        },
      ],
    },
    {
      title: "第9条（準拠法・裁判管轄）",
      contents: [
        {
          text: "本規約の解釈にあたっては、日本法を準拠法とします。",
        },
        {
          text: "本サービスに関して紛争が生じた場合には、運営者の本店所在地を管轄する裁判所を専属的合意管轄とします。",
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      <Header themeColor="#F3F3F3"></Header>
      <div className="container">
        <h1 className="pt-8 text-xl font-bold">利用規約</h1>
        <p className="py-8 text-sm">
          この利用規約（以下「本規約」）は、本サービス運営者（以下「運営者」）がこのウェブサイト上で
          提供するサービス（以下「本サービス」）の利用条件を定めるものです。本サービスに登録
          および本サービスを閲覧されるご利用者（以下「ユーザー」）には、本規約に則って本サービスを
          ご利用いただきます。
        </p>
        {terms.map((term) => (
          <div key={term.title}>
            <TermsPrivacypolicy title={term.title} contents={term.contents} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
