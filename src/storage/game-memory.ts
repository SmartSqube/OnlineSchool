import { UserMap, UserName } from "./game-users";

export function setGameMemoryUser(user: UserName) {
  localStorage.setItem("user-name", user);
}

export function getGameMemoryUser() {
  const user = localStorage.getItem("user-name");
  if (typeof user === "string" && UserMap[user as UserName]) {
    return user as UserName;
  }
  return "Monkey";
}

export function saveGameMemory(key: string, obj: any) {
  const user = getGameMemoryUser();
  const objtext = JSON.stringify(obj);
  localStorage.setItem(`${user}-${key}`, objtext);
}

export function loadGameMemory(key: string) {
  const user = getGameMemoryUser();
  const objtext = localStorage.getItem(`${user}-${key}`);
  try {
    if (objtext) {
      return JSON.parse(objtext);
    }
  } catch (e) {}
  return undefined;
}
