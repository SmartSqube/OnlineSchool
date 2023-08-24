import { FC, createContext, useContext } from "react";

import { SaidBarContiner } from "./ saidbar.styles";
import { Button } from "../../../uiKit/button";
import { StateContext } from "../../../store/context";

type ThemeContextType = "light" | "dark";

const ThemeContext = createContext<ThemeContextType>("light");

export const Saidbar: FC = () => {
  const { setActiveView } = useContext(StateContext);
  return (
    <SaidBarContiner>
      <Button icon="AppLogo" text="" onClick={() => setActiveView("page1")} />
      <Button
        icon="MathIcon"
        text="Сложение"
        onClick={() => setActiveView("AddGame")}
      />
      <Button
        icon="MathIcon"
        text="Умножение"
        onClick={() => setActiveView("MultiplyGame")}
      />
    </SaidBarContiner>
  );
};
