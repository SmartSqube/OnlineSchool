import { FC } from "react";
import { Button } from "../button";
import { SaidBarContiner } from "./ saidbar.styles";

export const Saidbar: FC = ({}) => {
  return (
    <SaidBarContiner>
      <Button icon="AlphabetIcon" text="Алфавит" />
    </SaidBarContiner>
  );
};
