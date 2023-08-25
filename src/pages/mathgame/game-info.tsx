import { FC, useContext, useEffect, useState } from "react";

import { MathGame } from "./math-game";
import { Button } from "../../uiKit/button";
import { LosContainer, WinContainer } from "./game-info.styles";
import { StateContext } from "../../store/context";
import { Stars } from "./components/stars";

interface GameInfoProps {
  knowladge: number[];
  onSave: (knowladge: number[]) => void;
  signCalc: (a: number, b: number) => number;
  sign: string;
}

export const GameInfo: FC<GameInfoProps> = ({
  knowladge,
  onSave,
  signCalc,
  sign,
}) => {
  const { user } = useContext(StateContext);
  const [mode, setMode] = useState<"GAME" | "INFO" | "LOS" | "WIN">("INFO");

  useEffect(() => {
    setMode("INFO");
  }, [user]);

  const lvl = knowladge.reduce((acc, item) => {
    if (item > 0) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 1);

  if (mode === "INFO") {
    return (
      <div>
        <h1>{`Уровень: ${lvl}`}</h1>
        <Button icon="PlayIcon" text="Играть" onClick={() => setMode("GAME")} />
        <Stars knowladge={knowladge} signCalc={signCalc} sign={sign} />
      </div>
    );
  }
  if (mode === "LOS") {
    return (
      <LosContainer>
        <div>
          <h1>{`Вы проиграли >:(`}</h1>
          <h1>{`Уровень: ${lvl}`}</h1>

          <Button
            icon="PlayIcon"
            text="Играть"
            onClick={() => setMode("GAME")}
          />
          <Stars knowladge={knowladge} signCalc={signCalc} sign={sign} />
        </div>
      </LosContainer>
    );
  }
  if (mode === "WIN") {
    return (
      <WinContainer>
        <div>
          <h1>{`Вы победили :)`}</h1>
          <h1>{`Уровень: ${lvl}`}</h1>

          <Button
            icon="PlayIcon"
            text="Играть"
            onClick={() => setMode("GAME")}
          />
          <Stars knowladge={knowladge} signCalc={signCalc} sign={sign} />
        </div>
      </WinContainer>
    );
  }

  return (
    <MathGame
      maxErrors={3}
      maxTimer={66}
      knowledge={knowladge}
      sign={sign}
      signCalc={signCalc}
      lvl={lvl}
      onLos={(result) => {
        onSave(result);
        setMode("LOS");
      }}
      onWin={(result) => {
        onSave(result);
        setMode("WIN");
      }}
    />
  );
};
