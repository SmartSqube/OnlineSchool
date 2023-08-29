import { type } from "os";
import { MATH_GAME_MAP } from "../pages/mathgame/costants";
import { loadGameMemory, saveGameMemory } from "./game-memory";
import moment from "moment";

type Disc = "addition" | "multiplication" | "division" | "subtraction";
export interface ResoultDay {
  data: string;
  minLvl: number;
  maxLvl: number;
  currentLvl: number;
  minProc: number;
  maxProc: number;
  currentProc: number;
}

export const memoryLoadHistory = (disc: Disc) => {
  const obj = loadGameMemory(`${disc}-history`);
  if (Array.isArray(obj)) {
    return obj as ResoultDay[];
  }
  return [];
};
const updateResoultDay = (
  resoultDay: ResoultDay | undefined,
  lvl: number,
  proc: number
) => {
  if (!resoultDay) {
    return;
  }
  resoultDay.currentLvl = lvl;
  resoultDay.currentProc = proc;
  if (lvl < resoultDay.minLvl) {
    resoultDay.minLvl = lvl;
  }
  if (lvl > resoultDay.maxLvl) {
    resoultDay.maxLvl = lvl;
  }
  if (proc < resoultDay.minProc) {
    resoultDay.minProc = proc;
  }
  if (proc > resoultDay.maxProc) {
    resoultDay.maxProc = proc;
  }
};
export const memorySaveHistory = (disc: Disc, knowladge: number[]) => {
  const history = memoryLoadHistory(disc);
  let now = moment().format("D-MM-YYYY");

  let lvl = knowladge.reduce((acc, item) => {
    if (item >= 3) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 1);
  if (lvl < 2) {
    lvl = 2;
  }

  const allK = knowladge.reduce((acc, k) => acc + k, 0);

  const maxK = MATH_GAME_MAP.length * 10;
  const proc = Number(((100 / maxK) * allK).toFixed(1));
  if (history.at(-1)?.data !== now) {
    history.push({
      data: now,
      minLvl: lvl,
      maxLvl: lvl,
      currentLvl: lvl,
      minProc: proc,
      maxProc: proc,
      currentProc: proc,
    });
  }

  updateResoultDay(history.at(-1), lvl, proc);

  saveGameMemory(`${disc}-history`, history);
};
