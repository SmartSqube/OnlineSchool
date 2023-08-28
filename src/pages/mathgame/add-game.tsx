import { FC, useContext } from "react";

import { GameInfo } from "./game-info";
import { StateContext } from "../../store/provoder";

export const AddGame: FC = () => {
  const {
    state: { addKnowladge },
    dispatch,
  } = useContext(StateContext);

  const knowladge = addKnowladge || [];

  return (
    <GameInfo
      knowladge={knowladge}
      sign="+"
      signCalc={(a, b) => a + b}
      onSave={(result) => {
        dispatch({ type: "SET_ADD_KNOWLAGE", payload: result });
      }}
    />
  );
};
