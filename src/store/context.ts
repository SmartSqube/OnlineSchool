import { createContext } from "react";

export type PageName = "page1" | "page2";

interface State {
  activeView: PageName;
  setActiveView: (view: PageName) => void;
}

export const StateContext = createContext<State>({
  activeView: "page1",
  setActiveView: () => {},
});
