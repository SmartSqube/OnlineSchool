import { Example } from "./types";

function generateMathMap() {
  const resolt: Example[] = [];
  for (let a = 0; a <= 10; a++) {
    for (let b = 0; b <= a; b++) {
      resolt.push({ a, b });
    }
  }
  return resolt;
}

export const MATH_GAME_MAP = generateMathMap();
