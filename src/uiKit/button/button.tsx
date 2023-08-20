import { FC } from "react";
import { ButtonContiner, Lable } from "./button.styles";
import { Icon } from "../icon/icon";
import { IconName } from "../../media/icons";

export interface ButtonProps {
  icon: IconName;
  text: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ icon, text, onClick }) => {
  return (
    <ButtonContiner onClick={onClick}>
      <Icon name={icon} />
      <Lable>{text}</Lable>
    </ButtonContiner>
  );
};
