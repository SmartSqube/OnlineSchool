import { FC, createContext, useContext } from "react";
import { StateContext } from "../../../store/provoder";
import { SaidBarContiner } from "./ saidbar.styles";
import { Button } from "../../../uiKit/button";

type ThemeContextType = "light" | "dark";

const ThemeContext = createContext<ThemeContextType>("light");

export const Saidbar: FC = () => {
  const {
    state: { activeView },
    dispatch,
  } = useContext(StateContext);
  return (
    <SaidBarContiner>
      <Button
        icon="MathIcon"
        text="Сложение"
        onClick={() => dispatch({ type: "SET_ACTIV_VIEW", payload: "AddGame" })}
      />
      <Button
        icon="MathIcon"
        text="Умножение"
        onClick={() =>
          dispatch({ type: "SET_ACTIV_VIEW", payload: "MultiplyGame" })
        }
      />
    </SaidBarContiner>
  );
};
