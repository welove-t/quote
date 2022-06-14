import * as React from "react";

type Props = {
  title: string;
  contents: {
    text: string;
    children?: string[];
  }[];
};

const TermsPrivacypolicy = ({ title, contents }: Props) => (
  <>
    {title && (
      <h2 className="my-4 border-b-2 text-base font-semibold ">{title}</h2>
    )}
    <ol className="list-decimal py-2 pl-4 pr-2 text-sm">
      {contents.map((content) => (
        <li key={content.text} className="pb-1">
          {content.text}
          {content.children && (
            <ol className="list-decimal py-2 pl-2">
              {content.children.map((childText) => (
                <li key={childText} className="pb-1">
                  {childText}
                </li>
              ))}
            </ol>
          )}
        </li>
      ))}
    </ol>
  </>
);
export default TermsPrivacypolicy;
