import { FC, useContext } from "react";

import { StateContext } from "../../store/context";
import { GameInfo } from "./game-info";

export const AddGame: FC = () => {
  const { memory, saveMemory } = useContext(StateContext);

  const knowladge = memory.addKnowladge || [];

  return (
    <GameInfo
      knowladge={knowladge}
      sign="+"
      signCalc={(a, b) => a + b}
      onSave={(result) => {
        saveMemory({ addKnowladge: result });
      }}
    />
  );
};
