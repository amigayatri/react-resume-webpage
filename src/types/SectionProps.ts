import DateIntervalProps from "./DateIntervalProps"
export default interface SectionProps {
	name: string
	items: string[]
	dates?: DateIntervalProps[]
	subitem?: boolean
}
