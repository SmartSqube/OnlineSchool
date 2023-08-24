import { FC } from "react";
import { StarContainer } from "./stars.styles";

interface StarProps {
  count: number;
}

export const Stars: FC<StarProps> = ({ count }) => {
  const stars = Array.from({ length: count }, () => "✔");

  return (
    <StarContainer>
      {stars.map((item) => (
        <span>{item}</span>
      ))}
    </StarContainer>
  );
};
