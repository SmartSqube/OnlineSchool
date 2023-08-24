import { FC, useContext, useState } from "react";
import { StateContext } from "../store/context";
import { NavigationLayout } from "../layouts";

import { AddGame } from "../pages/mathgame/add-game";
import { MultiplyGame } from "../pages/mathgame/multiply-game";

export const View: FC = () => {
  const { activeView } = useContext(StateContext);

  return (
    <>
      {activeView === "page1" && (
        <NavigationLayout>
          <div>Page1</div>
        </NavigationLayout>
      )}
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
