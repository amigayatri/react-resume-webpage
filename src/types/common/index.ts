import { TFunction } from "i18next"
import { ChangeEvent, CSSProperties } from "react"
import { iconKey } from "../../icons/"

export interface ElementProps {
	lng: string
}

export interface BaseElementProps extends ElementProps {
	t: TFunction<any, undefined>
}

export interface ToggleIconProps {
	id: iconKey
	trueValAsStr: string
	shouldChange: boolean
	options: {
		true: iconKey
		false: iconKey
	}
}

export interface ToggleProps extends ElementProps {
	state: unknown
	stateChangeFN: () => void
	label: string
	icon: ToggleIconProps
	alwaysDark?: boolean
	showLabel?: boolean
	customColor?: string
	size: number
}

interface IconCustomStyle {
	wrapper?: CSSProperties
	icon?: CSSProperties
}

export interface SVGElProps extends ElementProps {
	id: iconKey
	size: number
	local: string
	isTrue?: boolean
	responsive?: boolean
	rotationDeg?: number
	noTransition?: boolean
	color?: string
	customStyle?: IconCustomStyle
}

export interface SVGProps {
	isResponsive: boolean
	rotationDeg: number
	alt: string
	size: number
	isToggle: boolean
	isTrue: boolean
	hasTransition: boolean
	color: string
	customStyle?: IconCustomStyle
}

export interface SelectStyleProps {
	label: {
		bg: string
		text: string
	}
	select: {
		bg: string
		text: string
		border: string
	}
}

export interface ProgressProps {
	done: number
	total: number
	acceptance?: number
}

export interface ProgressBarProps {
	title: string
	type?: string
	progress: ProgressProps
	size?: number
	color: {
		done: string
		total: string
	}
}
export interface PageProps {
	params: Promise<{ lng: string }>
}
export interface LinkProps {
	path: string
	key: string
	icon: iconKey
	isExternal: boolean
	sublinks?: LinkProps[]
}

export interface OptionProps {
	value: string
	key: string
	tOptions?: { [key: string]: string }
	extraText?: string
}

export interface GroupProps {
	groupKey: string
	options: OptionProps[]
}

export type onSelectChange = (arg0: ChangeEvent<HTMLSelectElement>) => void

export interface SelectProps extends ElementProps {
	options: GroupProps[]
	id: string
	iconId?: iconKey
	local: string
	Button?: React.ReactElement
	label: string
	namespace: string
	fontSize: number
	onHeader: boolean
	defaultValue: string
	onSelectChange: onSelectChange
	customStyle?: SelectStyleProps
	noTranslation?: boolean
}

export type { iconKey }