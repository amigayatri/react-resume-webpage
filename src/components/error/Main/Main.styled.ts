import styled from "styled-components"

export const MainWrapper = styled.section`
	color: ${({ theme }) => theme.colors.base.pink};
	width: 100%;
	min-height: var(--fullpage);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`
export const IconsWrapper = styled.div`
	display: flex;
	color: ${({ theme }) => theme.colors.base.pink};
`
