import styled from "styled-components"
const options = ["rotateX", "rotateY", "rotateZ"]
const getTransform = () => {
	const pos = Math.floor(Math.random() * 3)
	return options[pos].concat("(360deg);")
}

export const BadgeComponentWrapper = styled.div<{ $isSelected: boolean }>`
	max-width: 128px;
	padding: 16px;
	display: inline-block;
	border-radius: 16px;
	background-color: ${({ theme, $isSelected }) =>
		$isSelected ? theme.accent : "transparent"};
	transition: ${({ theme }) => theme.transition};
	transform: ${({ $isSelected }) => ($isSelected ? getTransform() : "none")};
`

export const BadgeImg = styled.img`
	width: 96px;
	height: 96px;
`