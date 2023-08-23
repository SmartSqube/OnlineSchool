import { FC, useContext, useState } from "react";
import { StateContext } from "../store/context";
import { NavigationLayout } from "../layouts";
import { MathGame } from "../pages/mathgame/mathgame";

export const View: FC = () => {
  const { activeView } = useContext(StateContext);

  return (
    <>
      {activeView === "page1" && (
        <NavigationLayout>
          <div>Page1</div>
        </NavigationLayout>
      )}
      {activeView === "page2" && (
        <NavigationLayout>
          <div>Page2</div>
          <MathGame
            maxTime={3}
            examples={[
              { a: 5, b: 9, sign: "+" },
              { a: 1, b: 1, sign: "+" },
              { a: 2, b: 2, sign: "+" },
            ]}
            onLos={() => console.log("OnLost")}
            onWin={() => console.log("OnWin")}
          />
        </NavigationLayout>
      )}
    </>
  );
};
