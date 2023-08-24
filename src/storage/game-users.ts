import { IconMap, IconName } from "../media/icons";

interface UserInfo {
  name: string;
  icon: IconName;
}

export const UserMap = {
  Dog: { name: "Сбакчка", icon: "DogIcon" } as UserInfo,
  Dragon: { name: "Дракончик", icon: "DragonIcon" } as UserInfo,
  Lion: { name: "Львенок", icon: "LionIcon" } as UserInfo,
  Unicorn: { name: "Единорожик", icon: "UnicornIcon" } as UserInfo,
  Tiger: { name: "Тигренок", icon: "TigerIcon" } as UserInfo,
  Monkey: { name: "Обезьянка", icon: "MonkeyIcon" } as UserInfo,
};
export type UserName = keyof typeof UserMap;
