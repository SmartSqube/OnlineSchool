import { FC, useEffect, useRef, useState, memo } from "react";
import { MATH_GAME_MAP } from "./costants";
import { ExampleBlock } from "./components/example";
import { Progressbar } from "../../uiKit/progressbar";
import { MathGameContainer, MathGamec } from "./math-game.styles";

export interface MathGameProps {
  knowledge: number[];
  maxTimer: number;
  sign: string;
  maxErrors: number;
  signCalc: (a: number, b: number) => number;
  lvl: number;
  onWin: (knowledge: number[]) => void;
  onLos: (knowledge: number[]) => void;
}
const knowladgeRange = (knowledge: number[]) => {
  return knowledge.map((n) => (n < 0 ? 0 : n > 10 ? 10 : n));
};

console.log("knowladgeRange", knowladgeRange([-1, -2, 1, 5, 15, 20]));

const genKnowladge = (lvl: number, knowledge: number[]) => {
  const result: number[] = [];
  for (let i = 0; i < lvl || i < knowledge.length; i++) {
    result.push(knowledge[i] || 0);
  }
  return knowladgeRange(result);
};

export const MathGame: FC<MathGameProps> = memo(
  ({ knowledge, lvl, maxTimer, maxErrors, sign, signCalc, onLos, onWin }) => {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [errorCount, setErrorCount] = useState(0);
    const [clue, setClue] = useState(false);
    const [t, setT] = useState(0);
    const [ex, setEx] = useState(0);
    const indexLeft = useRef<number[]>(
      Array.from({ length: lvl }, (_, i) => i)
    );
    const result = useRef(genKnowladge(lvl, knowledge));

    useEffect(() => {
      const id = window.setInterval(() => setT(t + 1), 1000);
      return () => {
        window.clearInterval(id);
      };
    }, [t]);

    useEffect(() => {
      if (t > maxTimer) {
        result.current = knowladgeRange(result.current);
        onLos(result.current);
      }
    }, [maxTimer, onLos, t]);

    useEffect(() => {
      if (MATH_GAME_MAP[currentIndex] || !indexLeft.current.length) {
        return;
      }

      const randLeft = Math.floor(Math.random() * indexLeft.current.length);
      setCurrentIndex(indexLeft.current[randLeft]);
      indexLeft.current.splice(randLeft, 1);
      setEx(lvl - indexLeft.current.length - 1);
    }, [currentIndex, lvl]);

    return (
      <MathGamec>
        <MathGameContainer $color={clue ? "red" : "lightgrey"}>
          <h1>{`${lvl} примера`}</h1>
          <Progressbar
            color="TIME_COLOR"
            iconName="TimeIcon"
            value={t}
            maxValue={maxTimer}
          />
          <Progressbar
            color="EX_COLOR"
            iconName="PeopleIcon"
            value={ex}
            maxValue={lvl}
          />
          <Progressbar
            color="ERROR_COLOR"
            iconName="ErrorIcon"
            value={errorCount}
            maxValue={maxErrors}
          />
          <ExampleBlock
            clue={clue}
            index={currentIndex}
            sign={sign}
            signCalc={signCalc}
            onError={() => {
              result.current[currentIndex] -= 3;
              if (errorCount + 1 >= maxErrors) {
                result.current = knowladgeRange(result.current);
                onLos(result.current);
              }
              setErrorCount(errorCount + 1);
              setClue(true);
            }}
            onRight={() => {
              if (!indexLeft.current.length) {
                result.current = knowladgeRange(result.current);
                onWin(result.current);
              }
              result.current[currentIndex]++;
              if (clue) {
                indexLeft.current.push(currentIndex);
              }
              setCurrentIndex(-1);
              setClue(false);
            }}
          />
        </MathGameContainer>
      </MathGamec>
    );
  }
);
