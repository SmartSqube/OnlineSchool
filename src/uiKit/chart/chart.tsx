import { FC } from "react";
import { ResoultDay } from "../../storage/memory-history";
import { ChartContiner } from "./chart.styles";
import { ChartElement } from "./components/chart-element";

export interface chartProps {
  value: number[];
}

export const Chart: FC<chartProps> = ({ value }) => {
  const karr = value.splice(-100);
  const max = Math.max(...karr);

  return (
    <ChartContiner>
      {karr.map((k, index) => (
        <ChartElement count={karr.length} proc={(100 / max) * k} key={index} />
      ))}
    </ChartContiner>
  );
};
