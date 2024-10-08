import {
	MainWrapper,
	IconsWrapper,
	BlueWrapper,
	PinkWrapper
} from "./Main.styled"
import ErrorMessage from "../ErrorMessage"
import { useTranslation } from "react-i18next"
import { ReactElement } from "react"

interface MainProps {
	messageId: string
	children?: ReactElement[]
}

const Main = ({ children, messageId }: MainProps) => {
	const { t } = useTranslation()
	return (
		<MainWrapper>
			{children !== undefined && (
				<IconsWrapper>
					{children.map((child, i) => {
						if (typeof child === "string") return child
						const ElChild = child.type
						const { props } = child
						if ((i & 1) === 0) {
							return (
								<BlueWrapper key={messageId + "-child-" + i}>
									<ElChild {...props} />
								</BlueWrapper>
							)
						} else {
							return (
								<PinkWrapper key={messageId + "-child-" + i}>
									<ElChild {...props} />
								</PinkWrapper>
							)
						}
					})}
				</IconsWrapper>
			)}
			<ErrorMessage message={t("errors.".concat(messageId))} />
		</MainWrapper>
	)
}

export default Main
