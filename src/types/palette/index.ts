export interface PaletteProps {
	icon: string
	colors: Array<string>
}
export interface PaletteInfoProps {
	name: string
	group: string
}
export interface PaletteGroupProps extends Map<string, PaletteProps> {}
