import styled from "styled-components"
import LanguageSelect from "../../common/LanguageSelect"

export const MainWrapper = styled.main`
	height: var(--fullpage);
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	text-align: center;
	margin: 0 var(--container);
`
export const ExtraLanguages = styled(LanguageSelect)`
	max-width: 100%;
	width: 100%;
`
