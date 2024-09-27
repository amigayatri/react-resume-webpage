import ErrorProps from "../../../types/ErrorProps"
import { ErrorMessageWrapper, Message } from "./ErrorMessage.styled"
import SVGIcon from "../../../icons/SVGIcon"

const ErrorMessage = ({ message }: ErrorProps) => {
	return (
		<ErrorMessageWrapper>
			<SVGIcon size={80} id="terminalerror" />
			<Message>{message}</Message>
		</ErrorMessageWrapper>
	)
}

export default ErrorMessage
