import ErrorProps from "../../../types/ErrorProps"
import { ErrorMessageWrapper, Message } from "./ErrorMessage.styled"
import Typewriter from "react-ts-typewriter"
import SVGIcon from "../../../icons/SVGIcon"

const ErrorMessage = ({ message }: ErrorProps) => {
	return (
		<ErrorMessageWrapper>
			<SVGIcon size={80} id="terminalerror" />
			<Message>
				<Typewriter text={message} loop speed={256} />
			</Message>
		</ErrorMessageWrapper>
	)
}

export default ErrorMessage
