import { FC } from "react";

import { SaidBarContiner } from "./ saidbar.styles";
import { Button } from "../../../uiKit/button";

export const Saidbar: FC = () => {
  return (
    <SaidBarContiner>
      <Button icon="AlphabetIcon" text="Алфавит" />
    </SaidBarContiner>
  );
};
