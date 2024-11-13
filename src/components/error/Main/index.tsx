import { ElementProps } from "../../../types/common/"
import { useTranslation } from "../../../i18n/"
import { errors } from "../../../constants/errors.ts"
import { ErrorMessage } from "../ErrorMessage/client.tsx"
import { MainWrapper, IconsWrapper, IconWrapper, Button } from "./Main.styled"
import { SVGIcon } from "../../common/"
import { MulticoloredName } from "../../common/client.tsx"
import { fallbackLng } from "../../../i18n/settings.ts"

interface ErrorPageProps extends ElementProps {
	id: string
}

export const ErrorMain = async ({ lng, id }: ErrorPageProps) => {
	const { t } = await useTranslation(lng, "error")
	if (!errors.has(id)) return
	const errorObj = errors.get(id)
	if (errorObj === undefined) return
	const iconList = errorObj.icons
	return (
		<MainWrapper $isNotFound={id === "404"}>
			<IconsWrapper>
				{iconList.map((iconId) => {
					return (
						<IconWrapper key={`wrapper-icon-error-${iconId}`}>
							<SVGIcon id={iconId} local={id} size={128} lng={lng} />
						</IconWrapper>
					)
				})}
			</IconsWrapper>
			<ErrorMessage lng={lng} message={t(id)} />
			{id === "404" && (
				<Button href={"/" + fallbackLng}>
					<MulticoloredName
						local="error"
						iconId="home"
						legible
						fontSize={32}
						lng={lng}
						info={{ name: "rainbow monokai", group: "rainbow" }}
					>
						{t("button")}
					</MulticoloredName>
				</Button>
			)}
		</MainWrapper>
	)
}