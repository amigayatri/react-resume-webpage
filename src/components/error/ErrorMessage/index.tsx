import ErrorProps from "../../../types/ErrorProps"
import { ErrorMessageWrapper, Message } from "./ErrorMessage.styled"
import SVGIcon from "../../../icons/SVGIcon"

const ErrorMessage = ({ message }: ErrorProps) => {
	return (
		<ErrorMessageWrapper>
			<SVGIcon size={64} id="terminal" />
			<SVGIcon size={48} id="error" />
			<Message>{message}</Message>
		</ErrorMessageWrapper>
	)
}

export default ErrorMessage
