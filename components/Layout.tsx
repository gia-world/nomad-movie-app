import React from "react";
import Header from "./Header";
import * as S from "./Layout.style"

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <S.Layout>
      <Header />
      <S.main>{children}</S.main>
    </S.Layout>
  );
};

export default Layout;