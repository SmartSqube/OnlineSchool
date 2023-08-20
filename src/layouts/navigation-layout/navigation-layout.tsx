import type { FC, PropsWithChildren } from "react";
import { Container, Content, Header, Right } from "./navigation-layout.styles";
import { Saidbar } from "../components/saidbar";

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
