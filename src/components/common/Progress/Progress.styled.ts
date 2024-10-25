import styled from "styled-components"

export const Label = styled.span<{ $color?: string }>`
	color: ${({ $color, theme }) => $color || theme.primary};
	display: inline-block;
	transition: ${({ theme }) => theme.transition};
	font-size: 1.25rem;
`

export const ProgressDefault = styled.progress`
	visibility: hidden;
	position: absolute;
`

export const ProgressTitle = styled.h2<{ $hide?: boolean }>`
	margin: 8px 0;
	font-size: 1.5rem;
	display: ${({ $hide }) => ($hide ? "none" : "inline-block")};
	font-weight: 100;
	transition: ${({ theme }) => theme.transition};
	opacity: 0.2;
`

export const Subtitle = styled.span`
	margin: 8px 0;
	font-size: 1.125rem;
	display: inline-block;
	font-weight: 100;
	transition: ${({ theme }) => theme.transition};
	opacity: 0.2;
`

export const TitleWrapper = styled.div``

export const ProgressWrapper = styled.div`
	position: relative;

	&:hover
		> ${TitleWrapper}
		> ${ProgressTitle},
		&:focus
		> ${TitleWrapper}
		> ${ProgressTitle},
		&:hover
		> ${TitleWrapper}
		> ${Subtitle},
		&:focus
		> ${TitleWrapper}
		> ${Subtitle} {
		font-weight: 500;
		opacity: 1;
	}
`
