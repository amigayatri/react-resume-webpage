import styled from "styled-components"
import LanguageSelect from "../../common/LanguageSelect"
import media from "../../../constants/medias"

export const MainWrapper = styled.section`
	height: calc(100vh - 94px);
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	text-align: center;
	margin: 0 var(--container);
	${media.max.md} {
		height: calc(100vh - 134px);
	}
`
export const ExtraLanguages = styled(LanguageSelect)`
	max-width: 100%;
	width: 100%;
`
