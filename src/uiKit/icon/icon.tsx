import { FC } from "react";

import { IconContiner } from "./icon.styles";
import { IconMap, IconName } from "../../media/icons";
import { ColorMap, ColorName } from "../constants/colors";


interface IconProps{
    name: IconName,
    color?: ColorName
}



export const Icon:FC<IconProps> = ({name, color = "DEFAULT_TEXT_COLOR"})=>{
    const OutIcon = IconMap[name]
    return <IconContiner color={ColorMap[color]}><OutIcon /></IconContiner>
} 