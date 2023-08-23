import { FC } from "react";
import { ProgressbarContainer } from "./progressbar.styles";

export interface ProgressBarProps {
  time: number;
}

export const Progressbar: FC<ProgressBarProps> = ({ time }) => {
  return <ProgressbarContainer />;
};
