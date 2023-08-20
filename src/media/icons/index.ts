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
} as const;

export type IconName = keyof typeof IconMap;
