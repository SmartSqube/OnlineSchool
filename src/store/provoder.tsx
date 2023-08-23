import { FC, PropsWithChildren, useState } from "react";
import { PageName, StateContext } from "./context";

export const StateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeView, setActiveView] = useState<PageName>("page1");

  return (
    <StateContext.Provider value={{ activeView, setActiveView }}>
      {children}
    </StateContext.Provider>
  );
};
