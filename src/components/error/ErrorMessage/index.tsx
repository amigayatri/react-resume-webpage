import ErrorProps from "../../../types/ErrorProps"
import {
	ErrorMessageWrapper,
	Message,
	WritingCursor
} from "./ErrorMessage.styled"
import SVGIcon from "../../../icons/SVGIcon"

const ErrorMessage = ({ message }: ErrorProps) => {
	return (
		<ErrorMessageWrapper>
			<SVGIcon size={80} id="terminalerror" />
			<Message>
				{message}
				<WritingCursor />
			</Message>
		</ErrorMessageWrapper>
	)
}

export default ErrorMessage
