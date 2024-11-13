export interface ContactProps {
	text: string
	icon: string
	link: string
	showOnWeb: boolean
}
export interface DateIntervalProps {
	start: Date | string
	end?: Date | string
}
export interface SectionProps {
	name: string
	items: string[]
	icon: string
	dates?: DateIntervalProps[]
	subitem?: boolean
}
export interface TranslatedSectionProps {
	icon: string
	title: string
	items: string[]
	subitems?: string[]
	dates?: string[]
}
export interface TranslatedResumeProps {
	sections: TranslatedSectionProps[]
	contacts: ContactProps[]
	header: {
		name: string
		job: string
	}
	summary: string
}
