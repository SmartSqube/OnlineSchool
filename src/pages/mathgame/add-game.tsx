import { FC, useContext } from "react";

import { GameInfo } from "./game-info";
import { StateContext } from "../../store/provoder";

export const AddGame: FC = () => {
  const {
    state: { addKnowladge, addHistory },
    dispatch,
  } = useContext(StateContext);

  const knowladge = addKnowladge || [];
  const history = addHistory || [];

  return (
    <GameInfo
      history={history}
      knowladge={knowladge}
      sign="+"
      signCalc={(a, b) => a + b}
      onSave={(result) => {
        dispatch({ type: "SET_ADD_KNOWLAGE", payload: result });
      }}
    />
  );
};
