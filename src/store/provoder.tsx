import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { PageName, StateContext } from "./context";
import {
  GameMemory,
  getGameMemory,
  getGameUser,
  loadGameMemory,
  saveGameMemory,
} from "../storage/game-memory";

export const StateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeView, setActiveView] = useState<PageName>("page1");
  const [user, setUser] = useState(getGameUser());
  const [memory, setMemory] = useState<GameMemory>({});

  const saveMemory = useCallback((m: GameMemory) => {
    saveGameMemory({ ...getGameMemory(), ...m });
    setMemory(getGameMemory());
  }, []);

  useEffect(() => {
    loadGameMemory(user);
    setMemory(getGameMemory());
  }, [user]);

  return (
    <StateContext.Provider
      value={{
        memory,
        user,
        activeView,
        setActiveView,
        setUser,
        saveMemory,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
