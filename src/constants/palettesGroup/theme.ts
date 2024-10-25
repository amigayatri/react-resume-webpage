import { namedArr } from "../../themes/Named"
import { fullMonokai, grayscaleMonokai } from "../../themes/Monokai"
import PaletteGroup from "../../types/PaletteGroupProps"

const themes: PaletteGroup = new Map([
	["current", namedArr],
	["grayscalemonokai", grayscaleMonokai],
	["fullmonokai", fullMonokai]
])
export default themes
