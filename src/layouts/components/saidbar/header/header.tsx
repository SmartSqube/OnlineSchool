import { FC, useContext, useState } from "react";
import {
  BlockMenu,
  Container,
  LabelContainer,
  UserNameContainer,
  UserNameLabel,
} from "./header.styles";

import { UserMap, UserName } from "../../../../storage/game-users";
import { StateContext } from "../../../../store/context";
import { Icon } from "../../../../uiKit/button";

export const Header: FC = () => {
  const { user, activeView, setUser } = useContext(StateContext);

  const [select, setSelect] = useState(false);

  const userList = Object.keys(UserMap) as UserName[];
  return (
    <Container>
      <LabelContainer>
        <UserNameLabel onClick={() => setSelect(!select)}>
          <Icon name={UserMap[user].icon} />
          <span>{UserMap[user].name}</span>
        </UserNameLabel>
        <span> {activeView}</span>
      </LabelContainer>

      {select && (
        <BlockMenu onClick={() => setSelect(!select)}>
          {userList.map((n) => (
            <UserNameContainer onClick={() => setUser(n)}>
              <Icon name={UserMap[n].icon} />
              <span>{UserMap[n].name}</span>
            </UserNameContainer>
          ))}
        </BlockMenu>
      )}
    </Container>
  );
};
