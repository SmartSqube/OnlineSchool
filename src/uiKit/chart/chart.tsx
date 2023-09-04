import { FC } from "react";
import { ResoultDay } from "../../storage/memory-history";
import { CContiner, ChartContiner, DateBlock } from "./chart.styles";
import { ChartElement } from "./components/chart-element";

export interface chartProps {
  value: number[];
  lastDate: string;
}

export const Chart: FC<chartProps> = ({ value, lastDate }) => {
  const karr = value.splice(-100);
  const max = Math.max(...karr);

  return (
    <CContiner>
      <ChartContiner>
        {karr.map((k, index) => (
          <ChartElement
            count={karr.length}
            proc={(100 / max) * k}
            key={index}
          />
        ))}
      </ChartContiner>
      <DateBlock>
        <span>{lastDate}</span>
      </DateBlock>
    </CContiner>
  );
};
