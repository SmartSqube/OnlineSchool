import { FC, useContext } from "react";

import { GameInfo } from "./game-info";
import { StateContext } from "../../store/provoder";

export const MultiplyGame: FC = () => {
  const {
    state: { multyplyKnowladge },
    dispatch,
  } = useContext(StateContext);

  const knowladge = multyplyKnowladge || [];

  return (
    <GameInfo
      knowladge={knowladge}
      sign="*"
      signCalc={(a, b) => a * b}
      onSave={(result) => {
        dispatch({ type: "SET_MULTIPLY_KNOWLAGE", payload: result });
      }}
    />
  );
};
