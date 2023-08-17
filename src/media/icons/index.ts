import { ReactComponent as HomeIcon } from './home-icon.svg'
import { ReactComponent as AlphabetIcon} from './alphabet-icon.svg'


export const IconMap = {
    HomeIcon,
    AlphabetIcon
}as const;


export type IconName =  keyof typeof IconMap