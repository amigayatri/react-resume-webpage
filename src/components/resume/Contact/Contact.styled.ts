import styled from "styled-components"
import media from "../../../constants/medias"

export const Wrapper = styled.div<{ $isRTL: boolean }>`
	background-color: ${({ theme }) => theme.background};
	position: relative;
	padding: 0 0 32px;
	width: fit-content;
	margin: 0 auto 16px;

	${media.max.md} {
		transform: none;
		margin-top: 0;
		margin-bottom: 8px;
		margin-left: ${({ $isRTL }) => ($isRTL ? "auto" : "var(--container)")};
		margin-right: ${({ $isRTL }) => ($isRTL ? "var(--container)" : "auto")};
	}

	${media.print} {
		padding-bottom: 32px 0;
		margin: 0 var(--container);
	}
`

export const ContactList = styled.ul<{ $isRTL: boolean }>`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-direction: row;

	${media.max.md} {
		position: relative;
		flex-direction: column;
		align-items: ${({ $isRTL }) => ($isRTL ? "flex-end" : "flex-start")};
	}
`

export const ContactItem = styled.li<{ $showOnWeb: boolean; $i: number }>`
	display: ${({ $showOnWeb }) => ($showOnWeb ? "flex" : "none")};
	margin-left: 32px;
	border: 1px solid
		${({ $i, theme }) => ($i & 1 ? theme.secondAccent : theme.accent)};
	color: ${({ $i, theme }) => ($i & 1 ? theme.accent : theme.secondAccent)};
	padding: 4px 8px;
	border-radius: 8px;
	max-width: fit-content;

	${media.min.md} {
		justify-content: flex-start;
		align-items: center;
		&:first-of-type {
			margin-left: 0;
		}
	}
	${media.max.md} {
		margin: 8px 0;
		justify-content: flex-start;
		align-items: flex-start;
		&:first-of-type {
			margin-top: 0;
		}
	}

	${media.print} {
		display: flex;
	}
`

export const Link = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme.primary};
	font-size: 1.125rem;
	text-wrap: nowrap;
	display: inline-block;
	margin: 0;
	margin-left: 8px;
	max-width: auto;

	${media.max.xs} {
		text-wrap: wrap;
		max-width: 320px;
	}
`
