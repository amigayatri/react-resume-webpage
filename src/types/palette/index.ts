import { GroupProps, OptionProps } from "../common/"

export interface PaletteProps {
	icon: string
	colors: Array<string>
}
export interface PaletteInfoProps {
	name: string
	group: string
}
export interface PaletteGroupProps extends Map<string, PaletteProps> {}

export interface PaletteOptionProps extends OptionProps {
	name: string
}

export interface PaletteOptionGroupProps extends GroupProps {
	group: string
	size: number
	options: PaletteOptionProps[]
}
export type genPaletteOptionsType = (byGroup: boolean) => {
	palettes: PaletteOptionGroupProps[]
	groups: GroupProps
}
export type genOptionsType = (group: string, name: string) => PaletteOptionProps
export type genGroupsType = (
	arg0: [string, PaletteGroupProps]
) => PaletteOptionGroupProps
export type getPaletteOptionsType = () => GroupProps[]
export type validateGroupType = (opt: PaletteOptionGroupProps) => GroupProps
