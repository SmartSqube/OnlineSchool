import { FC, useContext, useState } from "react";
import {
  BlockMenu,
  Container,
  LabelContainer,
  UserNameContainer,
  UserNameLabel,
} from "./header.styles";

import { UserMap, UserName } from "../../../../storage/game-users";

import { Icon } from "../../../../uiKit/button";
import { StateContext } from "../../../../store/provoder";

export const Header: FC = () => {
  const {
    state: { activeView, useInfo },
    dispatch,
  } = useContext(StateContext);

  const [select, setSelect] = useState(false);

  const userList = Object.keys(UserMap) as UserName[];
  return (
    <Container>
      <LabelContainer>
        <UserNameLabel onClick={() => setSelect(!select)}>
          <Icon name={useInfo.icon} />
          <span>{useInfo.name}</span>
        </UserNameLabel>
        <span> {activeView}</span>
      </LabelContainer>

      {select && (
        <BlockMenu onClick={() => setSelect(!select)}>
          {userList.map((n) => (
            <UserNameContainer
              onClick={() => dispatch({ type: "SET_USER_NAME", payload: n })}
            >
              <Icon name={UserMap[n].icon} />
              <span>{UserMap[n].name}</span>
            </UserNameContainer>
          ))}
        </BlockMenu>
      )}
    </Container>
  );
};
