import Element from "../../../types/ElementProps"
import { ErrorMessageBase } from "./ErrorMessageBase"

export interface ErrorMessageProps extends Element {
	message: string
}

export const ErrorMessage = ({
	message,
	lng
}: ErrorMessageProps) => {
	return (
		<ErrorMessageBase message={message} lng={lng} />
	)
}
