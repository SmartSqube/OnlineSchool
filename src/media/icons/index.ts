import { ReactComponent as HomeIcon } from "./home-icon.svg";
import { ReactComponent as AlphabetIcon } from "./alphabet-icon.svg";
import { ReactComponent as ColorIcon } from "./colors-icon.svg";
import { ReactComponent as FigureIcon } from "./figure-icon.svg";
import { ReactComponent as MathIcon } from "./math-icon.svg";
import { ReactComponent as NumbersIcon } from "./numbers-icon.svg";
import { ReactComponent as OutputIcon } from "./output-icon.svg";
import { ReactComponent as PlayIcon } from "./play-icon.svg";
import { ReactComponent as RectIcon } from "./rect-icon.svg";
import { ReactComponent as SoundOffIcon } from "./sound_off-icon.svg";
import { ReactComponent as SoundIcon } from "./sound-icon.svg";
import { ReactComponent as UpdateIcon } from "./update-icon.svg";
import { ReactComponent as AppLogo } from "./update-icon.svg";
import { ReactComponent as PeopleIcon } from "./people-icon.svg";
import { ReactComponent as TimeIcon } from "./time-icon.svg";
import { ReactComponent as ErrorIcon } from "./error-icon.svg";
import { ReactComponent as LionIcon } from "./lion-icon.svg";
import { ReactComponent as DogIcon } from "./dog-icon.svg";
import { ReactComponent as TigerIcon } from "./tiger-icon.svg";
import { ReactComponent as UnicornIcon } from "./unicorn-icon.svg";
import { ReactComponent as MonkeyIcon } from "./monkey-icon.svg";
import { ReactComponent as DragonIcon } from "./dragon-icon.svg";

export const IconMap = {
  HomeIcon,
  AlphabetIcon,
  ColorIcon,
  FigureIcon,
  MathIcon,
  NumbersIcon,
  OutputIcon,
  PlayIcon,
  RectIcon,
  SoundOffIcon,
  SoundIcon,
  UpdateIcon,
  AppLogo,
  PeopleIcon,
  TimeIcon,
  ErrorIcon,
  LionIcon,
  DogIcon,
  TigerIcon,
  UnicornIcon,
  MonkeyIcon,
  DragonIcon,
} as const;

export type IconName = keyof typeof IconMap;
