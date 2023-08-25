import { FC } from "react";
import { Item, StarContainer, Title } from "./stars.styles";
import { Progressbar } from "../../../uiKit/progressbar";
import { MATH_GAME_MAP } from "../costants";
import { ColorName } from "../../../uiKit/constants/colors";

interface StarProps {
  knowladge: number[];
  signCalc: (a: number, b: number) => number;
  sign: string;
}
function getExample(
  index: number,
  signCalc: (a: number, b: number) => number,
  sign: string
) {
  const ex = MATH_GAME_MAP[index];
  if (!ex) {
    return "";
  }
  return `${ex.a} ${sign} ${ex.b} = ${signCalc(ex.a, ex.b)} `;
}
function getColor(k: number): ColorName {
  if (k < 3) {
    return "ERROR_TEXT_COLOR";
  }
  if (k < 7) {
    return "DEFAULT_TEXT_COLOR";
  }
  return "SUCCESS_TEXT_COLOR";
}

export const Stars: FC<StarProps> = ({ knowladge, signCalc, sign }) => {
  return (
    <StarContainer>
      {knowladge.map((k, index) => (
        <Item>
          <Title>{getExample(index, signCalc, sign)}</Title>
          <Progressbar value={k} maxValue={10} color={getColor(k)} />
        </Item>
      ))}
    </StarContainer>
  );
};
