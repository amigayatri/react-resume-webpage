import { MainWrapper, IconsWrapper } from "./Main.styled"
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
						return <ElChild key={messageId + "-child-" + i} {...props} />
					})}
				</IconsWrapper>
			)}
			<ErrorMessage message={t("errors.".concat(messageId))} />
		</MainWrapper>
	)
}

export default Main
