import { Dispatch, SetStateAction } from "react"
import { BaseElementProps, iconKey } from "../../../../../types/common"
import { currIcons } from "../../types"

export interface TotalProgressProps extends BaseElementProps {
	currIcons: currIcons
}

export interface StatsButtonProps extends BaseElementProps {
	statsState: [boolean, Dispatch<SetStateAction<boolean>>]
}

export interface DetailedStatsProps extends BaseElementProps {
	currIcons: currIcons
	isOpen: boolean
}

type usageLocalMap = Map<string, Set<iconKey>>

export interface Stats {
	used: number
	total: number
	usageLocalMap: usageLocalMap
}

export interface LocalStatsProps extends BaseElementProps {
	localMap: usageLocalMap
	total: number
}

export interface IDListProps extends BaseElementProps {
	idList: iconKey[]
	currLocal: string
}

export interface LocalSelectProps extends BaseElementProps {
	localArr: string[]
	localState: [string, Dispatch<SetStateAction<string>>]
}
