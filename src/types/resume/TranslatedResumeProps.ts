import ContactProps from "./ContactProps"
import TranslatedSectionProps from "./TranslatedSectionProps"

export default interface TranslatedResumeProps {
	sections: TranslatedSectionProps[]
	contacts: ContactProps[]
	header: {
		name: string
		job: string
	}
	summary: string
}
