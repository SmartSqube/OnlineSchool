import { getGameMemoryUser, setGameMemoryUser } from "../storage/game-memory";
import { UserInfo, UserMap, UserName } from "../storage/game-users";
import {
  memoryLoadKnoladge,
  memorySaveKnoladge,
} from "../storage/memory-knowladge";

export type PageName = "AddGame" | "MultiplyGame" | "DivisionGame" | "SubGame";

export type State = {
  //state
  activeView: PageName;
  //computable
  useInfo: UserInfo;
  userName: UserName;
  addKnowladge: number[];
  multyplyKnowladge: number[];
  divKnowladge: number[];
  subKnowladge: number[];
};

export const initialState: State = {
  //state
  activeView: "AddGame",

  //computable
  useInfo: UserMap[getGameMemoryUser()],
  userName: getGameMemoryUser(),
  addKnowladge: memoryLoadKnoladge("addition"),
  multyplyKnowladge: memoryLoadKnoladge("multiplication"),
  divKnowladge: memoryLoadKnoladge("division"),
  subKnowladge: memoryLoadKnoladge("subtraction"),
};

export type Action =
  | { type: "SET_ACTIV_VIEW"; payload: PageName }
  | { type: "SET_USER_NAME"; payload: UserName }
  | { type: "SET_ADD_KNOWLAGE"; payload: number[] }
  | { type: "SET_MULTIPLY_KNOWLAGE"; payload: number[] }
  | { type: "SET_DIVIZ_KNOWLAGE"; payload: number[] }
  | { type: "SET_SUB_KNOWLAGE"; payload: number[] };

const computable = (state: State) => {
  return {
    ...state,
    useInfo: UserMap[getGameMemoryUser()],
    userName: getGameMemoryUser(),
    addKnowladge: memoryLoadKnoladge("addition"),
    multyplyKnowladge: memoryLoadKnoladge("multiplication"),
    divKnowladge: memoryLoadKnoladge("division"),
    subKnowladge: memoryLoadKnoladge("subtraction"),
  };
};

export const rootReduser = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_ACTIV_VIEW":
      return computable({ ...state, activeView: action.payload });
    case "SET_USER_NAME":
      setGameMemoryUser(action.payload);
      return computable(state);
    case "SET_ADD_KNOWLAGE":
      memorySaveKnoladge("addition", action.payload);
      return computable(state);
    case "SET_MULTIPLY_KNOWLAGE":
      memorySaveKnoladge("multiplication", action.payload);
      return computable(state);
    case "SET_DIVIZ_KNOWLAGE":
      memorySaveKnoladge("division", action.payload);
      return computable(state);
    case "SET_SUB_KNOWLAGE":
      memorySaveKnoladge("subtraction", action.payload);
      return computable(state);
    default:
      return computable(state);
  }
};
