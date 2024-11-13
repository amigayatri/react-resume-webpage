import { BaseElementProps, ElementProps } from "../../types/common"
import {
	ContactProps,
	SectionProps,
	TranslatedResumeProps,
	TranslatedSectionProps
} from "../../types/resume"

export type formatDateType = (date: Date | undefined | string) => string
export type translateDatesType = (section: SectionProps, idx: number) => string
export type translateSectionType = (
	section: SectionProps
) => TranslatedSectionProps
export type translateResumeType = () => TranslatedResumeProps
export type showSectionType = (
	section: TranslatedSectionProps,
	index: number
) => JSX.Element
export interface ContactsElementProps extends ElementProps {
	contacts: ContactProps[]
}
export type showContactInfoType = (
	contact: ContactProps,
	index: number
) => JSX.Element
export interface HeaderProps {
	name: string
	job: string
}
export interface SummaryProps {
	summary: string
}
export interface SectionElementProps extends ElementProps {
	section: TranslatedSectionProps
}

export interface DownloadPDFProps extends ElementProps {
	resume: TranslatedResumeProps
}
export interface DownloadPDFBaseProps extends DownloadPDFProps {
	isDark: boolean
}
export interface DownloadPDFBaseProps extends BaseElementProps {}
export interface PDFProps {
	resume: TranslatedResumeProps
	isDark: boolean
}
