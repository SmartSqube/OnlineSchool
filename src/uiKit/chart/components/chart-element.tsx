import { FC } from "react";
import { VBloc } from "./chart-element.style";
interface ChartElementProps {
  proc: number;
  count: number;
}

export const ChartElement: FC<ChartElementProps> = ({ proc, count }) => {
  return <VBloc $proc={proc} $width={100 / count} />;
};
