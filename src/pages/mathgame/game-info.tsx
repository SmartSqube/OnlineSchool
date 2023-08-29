import { FC, useContext, useEffect, useState } from "react";

import { MathGame } from "./math-game";
import { Button } from "../../uiKit/button";
import {
  LosContainer,
  ProgressContainer,
  WinContainer,
} from "./game-info.styles";

import { Stars } from "./components/stars";
import { MATH_GAME_MAP } from "./costants";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { StateContext } from "../../store/provoder";
import { ResoultDay } from "../../storage/memory-history";
import { Chart } from "../../uiKit/chart/chart";

interface GameInfoProps {
  knowladge: number[];
  history: ResoultDay[];
  onSave: (knowladge: number[]) => void;
  signCalc: (a: number, b: number) => number;
  sign: string;
}

export const GameInfo: FC<GameInfoProps> = ({
  knowladge,
  history,
  onSave,
  signCalc,
  sign,
}) => {
  const {
    state: { userName },
  } = useContext(StateContext);
  const [mode, setMode] = useState<"GAME" | "INFO" | "LOS" | "WIN">("INFO");

  useEffect(() => {
    setMode("INFO");
  }, [userName]);

  const proc = history.at(-1)?.currentProc || 0;
  const lvl = history.at(-1)?.currentLvl || 2;
  console.log(history);
  if (mode === "INFO") {
    return (
      <div>
        <Chart value={history.map((item) => item.currentLvl)} />
        <h1>{`${lvl} примера`}</h1>
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
          <Chart value={history.map((item) => item.currentLvl)} />
          <h1>{`${lvl} примера`}</h1>
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
          <Chart value={history.map((item) => item.currentLvl)} />
          <h1>{`${lvl} примера`}</h1>
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
      maxTimer={100}
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
