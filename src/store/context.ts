import { createContext } from "react";
import { UserName } from "../storage/game-users";
import { GameMemory, getGameUser } from "../storage/game-memory";

export type PageName = "page1" | "MultiplyGame" | "AddGame";

interface State {
  memory: GameMemory;
  user: UserName;
  activeView: PageName;
  setActiveView: (view: PageName) => void;
  setUser: (user: UserName) => void;
  saveMemory: (memory: GameMemory) => void;
}

export const StateContext = createContext<State>({
  memory: {},
  user: getGameUser(),
  activeView: "page1",
  setActiveView: () => {},
  setUser: () => {},
  saveMemory: () => {},
});
