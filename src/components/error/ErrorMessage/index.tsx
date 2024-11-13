import { ErrorMessageBase } from "./ErrorMessageBase"
import { ErrorMessageProps } from "../types"

export const ErrorMessage = ({ message, lng }: ErrorMessageProps) => {
	return <ErrorMessageBase message={message} lng={lng} />
}
