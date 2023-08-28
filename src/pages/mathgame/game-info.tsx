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
import { memoryLoadKnoladge } from "../../storage/memory-knowladge";

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
  const {
    state: { userName },
  } = useContext(StateContext);
  const [mode, setMode] = useState<"GAME" | "INFO" | "LOS" | "WIN">("INFO");

  useEffect(() => {
    setMode("INFO");
  }, [userName]);

  let lvl = knowladge.reduce((acc, item) => {
    if (item >= 3) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 1);
  if (lvl < 2) {
    lvl = 2;
  }

  const allK = knowladge.reduce((acc, k) => acc + k, 0);

  const maxK = MATH_GAME_MAP.length * 10;
  const proc = Number(((100 / maxK) * allK).toFixed(1));
  if (mode === "INFO") {
    return (
      <div>
        <ProgressContainer>
          <CircularProgressbar
            value={proc}
            text={`Выучено на ${proc}%`}
            styles={buildStyles({
              textColor: "black",
              pathColor: "blue",
              trailColor: "gray",
              textSize: 5,
            })}
          />
        </ProgressContainer>
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
          <ProgressContainer>
            <CircularProgressbar
              value={proc}
              text={`Выучено на ${proc}%`}
              styles={buildStyles({
                textColor: "black",
                pathColor: "blue",
                trailColor: "gray",
                textSize: 5,
              })}
            />
          </ProgressContainer>
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
          <ProgressContainer>
            <CircularProgressbar
              value={proc}
              text={`Выучено на ${proc}%`}
              styles={buildStyles({
                textColor: "black",
                pathColor: "blue",
                trailColor: "gray",
                textSize: 5,
              })}
            />
          </ProgressContainer>
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
