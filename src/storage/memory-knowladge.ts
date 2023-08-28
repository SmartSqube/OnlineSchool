import { loadGameMemory, saveGameMemory } from "./game-memory";

type Disc = "addition" | "multiplication" | "division" | "subtraction";

export const memorySaveKnoladge = (disc: Disc, knowladge: number[]) => {
  saveGameMemory(disc, knowladge);
};
export const memoryLoadKnoladge = (disc: Disc) => {
  const obj = loadGameMemory(disc);
  if (Array.isArray(obj)) {
    return obj as number[];
  }
  return [];
};
