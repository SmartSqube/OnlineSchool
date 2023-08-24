import { FC, useMemo, useState } from "react";
import { MATH_GAME_MAP } from "../costants";
import { Example } from "../types";
import { ClueContainer, ExampleContainer, Input } from "./example.styles";

interface ExampleBlockProps {
  index: number;
  sign: string;
  clue: boolean;
  signCalc: (a: number, b: number) => number;
  onRight: () => void;
  onError: () => void;
}

export const ExampleBlock: FC<ExampleBlockProps> = ({
  index,
  sign,
  clue,
  signCalc,
  onError,
  onRight,
}) => {
  const [value, setValue] = useState("");

  const exl = MATH_GAME_MAP[index];

  const { a, b } = useMemo<Example>(() => {
    if (!exl) {
      return { a: 0, b: 0 };
    }
    if (Math.random() > 0.4999) {
      return exl;
    }
    return { a: exl.b, b: exl.a };
  }, [exl]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!exl) {
          return;
        }
        if (Number(value) === signCalc(a, b)) {
          onRight();
        } else {
          onError();
        }
        setValue("");
      }}
    >
      <ExampleContainer>
        {`${a} ${sign} ${b} = `}
        <Input
          value={value}
          onChange={(ev) => setValue(ev.currentTarget.value)}
          autoFocus
        />
      </ExampleContainer>

      {clue && (
        <ClueContainer>{`${a} ${sign} ${b} = ${signCalc(a, b)}`}</ClueContainer>
      )}
    </form>
  );
};
