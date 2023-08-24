import { FC } from "react";
import { Continer, ProgressbarContainer, Value } from "./progressbar.styles";
import { ColorMap, ColorName } from "../constants/colors";
import { Icon } from "../button";
import { IconName } from "../../media/icons";

export interface ProgressBarProps {
  iconName: IconName;
  value: number;
  maxValue: number;
  color: ColorName;
}

export const Progressbar: FC<ProgressBarProps> = ({
  iconName,
  value,
  maxValue,
  color,
}) => {
  return (
    <Continer>
      <Icon name={iconName} />
      <ProgressbarContainer>
        <Value $color={ColorMap[color]} $value={(100 / maxValue) * value} />
      </ProgressbarContainer>
    </Continer>
  );
};
