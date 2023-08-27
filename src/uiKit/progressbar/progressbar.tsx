import { FC } from "react";
import { Continer, ProgressbarContainer, Value } from "./progressbar.styles";
import { ColorMap, ColorName } from "../constants/colors";
import { Icon } from "../button";
import { IconName } from "../../media/icons";

export interface ProgressBarProps {
  iconName?: IconName;
  value: number;
  maxValue: number;
  color?: ColorName;
}

export const Progressbar: FC<ProgressBarProps> = ({
  iconName,
  value,
  maxValue,
  color = "DEFAULT_TEXT_COLOR",
}) => {
  let progress = value;
  if (progress > maxValue) {
    progress = maxValue;
  }
  if (progress < 0) {
    progress = 0;
  }
  return (
    <Continer>
      {iconName && <Icon name={iconName} />}
      <ProgressbarContainer>
        <Value $color={ColorMap[color]} $value={(100 / maxValue) * progress} />
      </ProgressbarContainer>
    </Continer>
  );
};
