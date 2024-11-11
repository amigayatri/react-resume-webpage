import { TFunction } from "i18next"
import ElementProps from "./ElementProps"

export default interface BaseElementProps extends ElementProps {
	t: TFunction<any, undefined>
}
