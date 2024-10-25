import styled from "styled-components";

export const SectionIcon = styled.span`
	height: 24px;
	margin-right: 8px;
`

export const SectionTitle = styled.h3`
	font-size: 1.5rem;
	margin: 0 0 16px;
	display: inline-flex;
	align-items: center;
`
export const Wrapper = styled.section`
	padding: 0 var(--container) 32px;
	& ${SectionIcon} {
		color: ${({ theme }) => theme.accent};
	}
	&:nth-of-type(even) ${SectionIcon} {
		color: ${({ theme }) => theme.secondAccent};
	}
`

export const SectionList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

export const SectionItem = styled.li`
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 8px;
`

export const DateWrapper = styled.span``

export const SubitemText = styled.p`
    font-size: 1rem;
    display: block;
    width: 100%;
    margin: 4px 0 8px;
    font-weight: 300;
`