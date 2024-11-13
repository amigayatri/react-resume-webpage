import { HeaderWrapper, Name, SubHeading } from "./Header.styled"
import { HeaderProps } from "../types.ts"

export const Header = ({ name, job }: HeaderProps) => {
	return (
		<HeaderWrapper>
			<Name>{name}</Name>
			<SubHeading>{job}</SubHeading>
		</HeaderWrapper>
	)
}
