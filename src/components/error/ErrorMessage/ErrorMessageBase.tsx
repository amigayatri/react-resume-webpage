import { ErrorMessageWrapper, Message } from "./ErrorMessage.styled"
import Typewriter from "react-ts-typewriter"
import { SVGIcon } from "../../common/"
import { ErrorMessageProps } from "../types"

export const ErrorMessageBase = ({ message, lng }: ErrorMessageProps) => {
	return (
		<ErrorMessageWrapper>
			<SVGIcon lng={lng} local="error" size={80} id="terminalerror" />
			<Message>
				<Typewriter text={message} loop speed={256} />
			</Message>
		</ErrorMessageWrapper>
	)
}
