import type { FC, PropsWithChildren } from "react";
import { Container, Content, Right } from "./navigation-layout.styles";
import { Saidbar } from "../components/saidbar";
import { Header } from "../components/saidbar/header/header";

export const NavigationLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Saidbar />
      <Right>
        <Header />
        <Content>{children}</Content>
      </Right>
    </Container>
  );
};
