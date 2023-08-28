import { FC, useContext, useState } from "react";
import { NavigationLayout } from "../layouts";

import { AddGame } from "../pages/mathgame/add-game";
import { MultiplyGame } from "../pages/mathgame/multiply-game";
import { StateContext } from "../store/provoder";

export const View: FC = () => {
  const {
    state: { activeView },
  } = useContext(StateContext);

  return (
    <>
      {activeView === "AddGame" && (
        <NavigationLayout>
          <AddGame />
        </NavigationLayout>
      )}
      {activeView === "MultiplyGame" && (
        <NavigationLayout>
          <MultiplyGame />
        </NavigationLayout>
      )}
    </>
  );
};
