"use client"

import styled from "styled-components"

export const AccordionWrapper = styled.ul<{ $isOpen: boolean }>`
	list-style: none;
	cursor: default;
	overflow-y: ${({ $isOpen }) => ($isOpen ? "auto" : "hidden")};
	height: fit-content;
	max-height: ${({ $isOpen }) => ($isOpen ? "640px" : "0px")};
	transition: ${({ theme }) => theme.transition};
`
export const AccordionButtonWrapper = styled.div``
