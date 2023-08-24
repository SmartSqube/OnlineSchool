import { UserName } from "./game-users";

export interface GameMemory {
  addKnowladge?: number[];
  subKnowladge?: number[];
  multiplyKnowladge?: number[];
  divisKnowladge?: number[];
}

let memory: GameMemory = {};

export function saveGameMemory(m: GameMemory) {
  memory = m;
  const user = localStorage.getItem("user-name") || "Monkey";
  const objtext = JSON.stringify(memory);
  localStorage.setItem(user, objtext);
}

export function loadGameMemory(user: UserName) {
  localStorage.setItem("user-name", user);
  const objtext = localStorage.getItem(user);
  try {
    if (objtext) {
      memory = JSON.parse(objtext);
      if (typeof memory !== "object") {
        memory = {};
      }
      return;
    }
  } catch (e) {}
  memory = {};
}

export function getGameMemory() {
  return memory;
}
export function getGameUser() {
  return (localStorage.getItem("user-name") || "Monkey") as UserName;
}

loadGameMemory(getGameUser());
