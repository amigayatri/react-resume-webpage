import { TFunction } from "i18next"

export interface ElementProps {
	lng: string
}

export interface BaseElementProps extends ElementProps {
	t: TFunction<any, undefined>
}

interface ToggleIconProps {
	id: string
	trueValAsStr: string
	shouldChange: boolean
	options: {
		true: string
		false: string
	}
}

export interface ToggleProps extends ElementProps {
	state: unknown
	stateChangeFN: () => void
	ariaLabel: string
	icon: ToggleIconProps
}

export interface SVGProps {
	alt: string
	size: number
	isToggle: boolean
	hasTransition: boolean
	color: string
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
	icon: string
	isExternal: boolean
	local?: string
}

export interface OptionProps {
	value: string
	key: string
	tOptions?: { groupName: string }
	extraText?: string
}

export interface GroupProps {
	groupKey: string
	options: OptionProps[]
}

export interface SelectProps extends ElementProps {
	options: GroupProps[]
	id: string
	iconId?: string
	local: string
	Button?: React.ReactElement
	label: string
	namespace: string
	fontSize: number
	onHeader: boolean
	defaultValue: string
	onSelectChange: (arg0: any) => void
	customStyle?: SelectStyleProps
}
