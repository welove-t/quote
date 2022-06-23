import React, { ReactNode } from "react";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

type Props = {
  children?: ReactNode;
  themeColor: string;
};

export const MainLayout = ({ children, themeColor }: Props) => {
  return (
    <>
      <Header themeColor={themeColor} />
      <main>{children}</main>
      <Footer themeColor={themeColor} />
    </>
  );
};
