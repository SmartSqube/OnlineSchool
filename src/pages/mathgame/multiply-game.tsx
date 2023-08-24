import { FC, useContext } from "react";

import { StateContext } from "../../store/context";
import { GameInfo } from "./game-info";

export const MultiplyGame: FC = () => {
  const { memory, saveMemory } = useContext(StateContext);

  const knowladge = memory.multiplyKnowladge || [];

  return (
    <GameInfo
      knowladge={knowladge}
      sign="*"
      signCalc={(a, b) => a * b}
      onSave={(result) => {
        saveMemory({ multiplyKnowladge: result });
      }}
    />
  );
};
