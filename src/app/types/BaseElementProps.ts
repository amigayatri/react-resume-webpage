import { i18n } from "i18next"
import ElementProps from "./ElementProps"

export default interface BaseElementProps extends ElementProps {
	lng: string
	i18n: i18n
}
